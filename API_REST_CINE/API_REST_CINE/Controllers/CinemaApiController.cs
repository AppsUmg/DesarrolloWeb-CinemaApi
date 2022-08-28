using API_REST_CINE.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_REST_CINE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CinemaApiController : ControllerBase
    {

        [HttpPost]
        public ActionResult setPelicula(string Tittle, string Year, string Type, string Img, string Ubication, string Description)
        {
            return this.Content(ClsConexion.setPelicula(Tittle,Year,Type,Img,Ubication,Description), "application/json", System.Text.Encoding.UTF8);
        }

        [HttpPut]
        public ActionResult setModPelicula(int Id,string Tittle, string Year, string Type, string Img, string Ubication, string Description)
        {
            return this.Content(ClsConexion.setModificarPelicula(Id,Tittle, Year, Type, Img, Ubication, Description), "application/json", System.Text.Encoding.UTF8);
        }
        [HttpDelete]
        public ActionResult setDelPelicula(int Id)
        {
            return this.Content(ClsConexion.setEliminarPelicula(Id), "application/json", System.Text.Encoding.UTF8);
        }

        [HttpGet("{value}")]
        public ActionResult getFiltrarPelicula(string value)
        {
            return this.Content(ClsConexion.getFiltrarPelicula(value), "application/json", System.Text.Encoding.UTF8);
        }

        [HttpGet]
        public ActionResult getPeliculas()
        {
            return this.Content(ClsConexion.getPeliculas(), "application/json", System.Text.Encoding.UTF8);
        }
    }
}
