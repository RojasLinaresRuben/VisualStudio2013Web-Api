using EjemploWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Web.Controllers
{
    public class CorreoLocalController : ApiController
    {
        public object Get()
        {

            Persona persona = new Persona
            {
                Apellido = "Rojas",
                Edad = 32,
                Nombre = "Ruben"
            };
            return persona;
        }
    }
}
