//Recogiendo referencias del formulario
import { formulario, altura, tilt, fov } from "./Constantes.js";

//Importando Clases
import validaFormulario from "./Validador.js";
import Calculadora from "./Calculos.js";
import Render from "./Render.js";

const ejecutaValidaciones = e => {
  e.preventDefault();
  let validacion = new validaFormulario();

  const flagValidacion = validacion.validarFormulario(altura, tilt, fov);
  if (flagValidacion === true) {
    let calculadora = new Calculadora();
    let tabla = calculadora.generaTabla(parseInt(altura.value), parseInt(tilt.value), parseInt(fov.value));
    let renderiza = new Render();
    renderiza.imprimeTabla(tabla);
  }
};

//Recogiendo el Evento del boton
formulario.addEventListener("submit", ejecutaValidaciones);
