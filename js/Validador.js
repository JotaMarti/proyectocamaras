import { ANGULO_RECTO } from "./Constantes.js";

class Validador {
  //Función de validación
  validarFormulario(altura, tilt, fov) {
    const MAX_TILT = ANGULO_RECTO - parseInt(fov.value);
    console.log(MAX_TILT, ANGULO_RECTO);
    let countValidacion = 0;
    //TODO : Ver con Juanma los posibles valores de validación
    if (isNaN(altura.value) || parseInt(altura.value) <= 0) {
      altura.classList.add("invalid");
    } else {
      altura.classList.remove("invalid");
      altura.classList.add("valid");
      countValidacion++;
    }
    if (isNaN(tilt.value) || parseInt(tilt.value) <= 0 || parseInt(tilt.value) > MAX_TILT) {
      //TODO: poner mensajes segun convega fallo
      tilt.classList.add("invalid");
    } else {
      tilt.classList.remove("invalid");
      tilt.classList.add("valid");
      countValidacion++;
    }
    if (isNaN(fov.value) || parseInt(fov.value) <= 0) {
      fov.classList.add("invalid");
    } else {
      fov.classList.remove("invalid");
      fov.classList.add("valid");
      countValidacion++;
    }

    if (countValidacion === 3) {
      return true;
    }
    return false;
  }
}
export default Validador;
