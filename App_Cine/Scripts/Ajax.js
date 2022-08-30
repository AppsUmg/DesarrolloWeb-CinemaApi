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



function getPeliculas(){


 $.ajax({
    url: 'http://webumg.azurewebsites.net/api/CinemaApi',
    type: "GET",
    dataType: "jsonp",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      console.log(data)
    }
});
}



function setPelicula() {
   var Titulo = document.getElementById('addt').value;
   var Año = document.getElementById('addYear').value;
   var Tipo = document.getElementById('addType').value;
   var UrlImg = document.getElementById('addImg').value;
   var Ubicacion = document.getElementById('addUbication').value;
   var Descripcion = document.getElementById('addDescrip').value;
    console.log(Titulo)
    		 
    if (Titulo != "") {
        if (Año != "") {
            if (Tipo != "") {
                if (UrlImg != "") {
                    if (Ubicacion != "") {
                        if (Descripcion != "") {

                            const Rurl = "http://webumg.azurewebsites.net/api/CinemaApi?Tittle="+Titulo+"&Year="+Año+"&Type="+Tipo+"&Img="+UrlImg+"&Ubication="+Ubicacion+"&Description="+Descripcion;
       
                            $.post(Rurl, function(data, status){
                              M.toast({ html: "Data: " + data + "\nStatus: " + status, classes: 'rounded black white-text' }); 
                            });
                      
                            document.getElementById('addt').value = ""
                            document.getElementById('addYear').value = ""
                            document.getElementById('addType').value = ""
                            document.getElementById('addImg').value = ""
                            document.getElementById('addUbication').value = ""
                            document.getElementById('addDescrip').value = ""
                      
                             M.toast({ html: "Pelicula Añadida.", classes: 'rounded black white-text' });
                      
                        }else{
                            M.toast({ html: "El Campo Descripcion esta vacio", classes: 'rounded black white-text' }); 
                        }
                    }else{
                        M.toast({ html: "El Campo Ubicacion esta vacio", classes: 'rounded black white-text' }); 
                    }
                }else{
                    M.toast({ html: "El Campo UrlImagen esta vacio", classes: 'rounded black white-text' }); 
                }
            }else{
                M.toast({ html: "El Campo Tipo esta vacio", classes: 'rounded black white-text' }); 
            }
        }else{
            M.toast({ html: "El Campo Año esta vacio", classes: 'rounded black white-text' }); 
        }
    }else{
        M.toast({ html: "El Campo titulo esta vacio", classes: 'rounded black white-text' }); 
    }

   
    
                 
    }
 
   
