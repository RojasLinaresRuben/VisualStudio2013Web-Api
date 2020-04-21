var $pathApisLocales = "http://localhost:51114/";//No se agregar el puerto

var $ServicioRestLocal = new $.RestClient($pathApisLocales + 'api/');

$ServicioRestLocal.add("CorreoLocal");// mismo nombre que el api controlador