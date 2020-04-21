function ajaxObtenerServicioRest() {
    console.log("validar si se mostro mostrar datos ajax");

    $ServicioRestLocal.CorreoLocal.read({}).done(function (response) {
        
        console.log("se hizo correcta la peticion con servicio rest desde jquery");
    });
}