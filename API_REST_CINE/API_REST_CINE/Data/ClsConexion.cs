using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API_REST_CINE.Data
{
    public class ClsConexion
    {
        public static string connectionstring = "Data Source= umg2022.database.windows.net ; " +
                                                "Initial Catalog= DB_UMG ;" +
                                                "User = umg ;" +
                                                "Password= Dev1234* ;" +
                                                "app=API_REST_CINE";

        public static string setPelicula(string Tittle, string Year, string Type, string Img, string Ubication,string Description)
        {
            string Result = "";
            using (SqlConnection conn = new SqlConnection(connectionstring))
            {
                conn.Open();
                SqlDataAdapter da = new SqlDataAdapter();
                DataTable dt = new DataTable();
                da.SelectCommand = new SqlCommand("[USP_DCP_SET_PELICULA]", conn);
                da.SelectCommand.CommandTimeout = 0;
                da.SelectCommand.Parameters.AddWithValue("@Tittle", Tittle);
                da.SelectCommand.Parameters.AddWithValue("@Year", Year);
                da.SelectCommand.Parameters.AddWithValue("@Type", Type);
                da.SelectCommand.Parameters.AddWithValue("@Img", Img);
                da.SelectCommand.Parameters.AddWithValue("@Ubication", Ubication);
                da.SelectCommand.Parameters.AddWithValue("@Description", Description);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.Fill(dt);
                Result = CreateJson(dt);
                conn.Dispose();
                conn.Close();
            }
            return Result;
        }

        public static string setModificarPelicula(int Id, string Tittle, string Year, string Type, string Img, string Ubication, string Description)
        {
            string Result = "";
            using (SqlConnection conn = new SqlConnection(connectionstring))
            {
                conn.Open();
                SqlDataAdapter da = new SqlDataAdapter();
                DataTable dt = new DataTable();
                da.SelectCommand = new SqlCommand("[USP_DCP_SET_MOD_PELICULA]", conn);
                da.SelectCommand.CommandTimeout = 0;
                da.SelectCommand.Parameters.AddWithValue("@Id", Id);
                da.SelectCommand.Parameters.AddWithValue("@Tittle", Tittle);
                da.SelectCommand.Parameters.AddWithValue("@Year", Year);
                da.SelectCommand.Parameters.AddWithValue("@Type", Type);
                da.SelectCommand.Parameters.AddWithValue("@Img", Img);
                da.SelectCommand.Parameters.AddWithValue("@Ubication", Ubication);
                da.SelectCommand.Parameters.AddWithValue("@Description", Description);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.Fill(dt);
                Result = CreateJson(dt);
                conn.Dispose();
                conn.Close();
            }
            return Result;
        }


        public static string setEliminarPelicula(int Id)
        {
            string Result = "";
            using (SqlConnection conn = new SqlConnection(connectionstring))
            {
                conn.Open();
                SqlDataAdapter da = new SqlDataAdapter();
                DataTable dt = new DataTable();
                da.SelectCommand = new SqlCommand("[USP_DCP_SET_DEL_PELICULA]", conn);
                da.SelectCommand.CommandTimeout = 0;
                da.SelectCommand.Parameters.AddWithValue("@Id", Id);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.Fill(dt);
                Result = CreateJson(dt);
                conn.Dispose();
                conn.Close();
            }
            return Result;
        }

        public static string getPeliculas()
        {
            string Result = "";
            using (SqlConnection conn = new SqlConnection(connectionstring))
            {
                conn.Open();
                SqlDataAdapter da = new SqlDataAdapter();
                DataTable dt = new DataTable();
                da.SelectCommand = new SqlCommand("[USP_DCP_GET_PELICULAS]", conn);
                da.SelectCommand.CommandTimeout = 0;
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.Fill(dt);
                Result = CreateJson(dt);
                conn.Dispose();
                conn.Close();
            }
            return Result;
        }

        public static string getFiltrarPelicula(string Value)
        {
            string Result = "";
            using (SqlConnection conn = new SqlConnection(connectionstring))
            {
                conn.Open();
                SqlDataAdapter da = new SqlDataAdapter();
                DataTable dt = new DataTable();
                da.SelectCommand = new SqlCommand("[USP_DCP_GET_PELICULA]", conn);
                da.SelectCommand.CommandTimeout = 0;
                da.SelectCommand.Parameters.AddWithValue("@Value", Value);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.Fill(dt);
                Result = CreateJson(dt);
                conn.Dispose();
                conn.Close();
            }
            return Result;
        }


        public static string CreateJson(DataTable table)
        {
            var JSONString = new StringBuilder();
            if (table.Rows.Count > 0)
            {
                JSONString.Append("[");
                for (int i = 0; i < table.Rows.Count; i++)
                {
                    JSONString.Append("{");
                    for (int j = 0; j < table.Columns.Count; j++)
                    {
                        if (j < table.Columns.Count - 1)
                        {
                            JSONString.Append("\"" + table.Columns[j].ColumnName.ToString() + "\":" + "\"" + table.Rows[i][j].ToString() + "\",");
                        }
                        else if (j == table.Columns.Count - 1)
                        {
                            JSONString.Append("\"" + table.Columns[j].ColumnName.ToString() + "\":" + "\"" + table.Rows[i][j].ToString() + "\"");
                        }
                    }
                    if (i == table.Rows.Count - 1)
                    {
                        JSONString.Append("}");
                    }
                    else
                    {
                        JSONString.Append("},");
                    }
                }
                JSONString.Append("]");
            }
            return JSONString.ToString();
        }
    }
}
