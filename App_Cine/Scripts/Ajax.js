let PMax = 10;
let IdPagina = "MF";
var Col = 0;



function MostrarModal(ID) {
    LoadInstances('.modal');
    element = document.getElementById(ID);
    
    instance = M.Modal.getInstance(element);
    instance.open();
}


function LoadInstances(tipoInstancia) {
    var elems = document.querySelectorAll('' + tipoInstancia + '');
    var options = {}

    if (tipoInstancia == ".datepicker") {
        var instances = M.Datepicker.init(elems, options);
    }

    if (tipoInstancia == ".modal") {
        var instances = M.Modal.init(elems, options);
    }

}







function setPelicula(Titulo,Año,Tipo,UrlImg,Ubicacion,Descripcion) {
    console.log(UrlImg);
     /*   $.ajax({
            type: "POST",
            //dataType: "json",
            url: "http://webumg.azurewebsites.net/api/CinemaApi?Tittle="+Titulo+"&Year="+Año+"&Type="+Tipo+"&Img="+UrlImg+"&Ubication="+Ubicacion+"&Description="+Descripcion,
            //data: { IdUsuario: $('#txtUsuario').val(), Password: $('#txtPassword').val() },
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

                
                  


                  document.getElementById('addt').value = ""
                  document.getElementById('addYear').value = ""
                  document.getElementById('addType').value = ""
                  document.getElementById('addImg').value = ""
                  document.getElementById('addUbication').value = ""
                  document.getElementById('addDescrip').value = ""

                  M.toast({ html: Data.MENSAJE, classes: 'rounded black white-text' });




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
        );
          */
        const url = "http://webumg.azurewebsites.net/api/CinemaApi?Tittle="+Titulo+"&Year="+Año+"&Type="+Tipo+"&Img="+UrlImg+"&Ubication="+Ubicacion+"&Description="+Descripcion;
        var headers = {}
        
        fetch(url, {
            method : "POST",
            mode: 'cors',
            headers: headers
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.error)
            }
            return response.json();
        })
        .then(data => {
            M.toast({ html: Data.MENSAJE, classes: 'rounded black white-text' });


        })
        .catch(function(error) {
            M.toast({ html: Data.MENSAJE, classes: 'rounded black white-text' });


        });
    }
 
   
