let PMax = 10;
let IdPagina = "MF";
var Col = 0;

function getPeliculas() {
    for (let index = 0; index < PMax; index++) {
        let HTML = "";
        
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "https://movie.azurewebsites.net/api/cartelera?imdbID=MF"+index,
           // data: { IdUsuario: $('#txtUsuario').val(), Password: $('#txtPassword').val() },
            contentType: "application/json; charset=utf-8",
            async: false,
            error: function (jqXHR, textStatus, errorThrown) {
                //M.toast({ html: 'Ocurrio un error', classes: 'rounded black white-text' });
                console.log('status code: ' + jqXHR.status + 'errorThrown: ' + errorThrown + 'jqXHR.responseText:' + jqXHR.responseText);
                console.log('jqXHR:');
                console.log(jqXHR);
                console.log('textStatus:');
                console.log(textStatus);
                console.log('errorThrown:');
                console.log(errorThrown);
            },
            success: function (Data) {
                  
                 if(Data != null){
                     HTML += '<tr>';
                     HTML += '<td><img src="'+Data.Poster+'" width="150" height="150" style="border-radius: 25%;"></td>';
                     HTML += '<td>'+Data.imdbID+'</td>';
                     HTML += '<td> <button class="btn waves-effect waves-light" type="submit" name="action"><i class="material-icons">edit</i></button></td>';
                     HTML += '<td> <button class="btn waves-effect waves-light" type="submit" name="action"><i class="material-icons">delete</i></button></td>';
                     HTML += '<td>'+Data.Title+'</td>';
                     HTML += '<td>'+Data.Year+'</td>';
                     HTML += '<td>'+Data.Type+'</td>';
                     HTML += '<td>'+Data.Ubication+'</td>';
                     HTML += '<td>'+Data.description+'</td>';
                     HTML += '<tr>';
                     $("#tabla-peliculas").append(HTML);
                    }
            }
            
        });
        
        
        
    } 
   
    


    

}