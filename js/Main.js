//Recogiendo referencias del formulario
import {formulario, altura, tilt, fov} from './Constantes.js'

//Importando Clases
import validaFormulario from './Validador.js'
import Calculadora from './Calculos.js'

const ejecutaValidaciones = () => {
	let validacion = new validaFormulario();

	const flagValidacion =  validacion.validarFormulario(altura , tilt , fov);
    if ( flagValidacion === true){
        let calculadora = new Calculadora( );
        let resultados = calculadora.calculaDatos(parseInt(altura.value) , parseInt(tilt.value) , parseInt(fov.value));
        console.log(resultados);
    }
    
}

//Recogiendo el Evento del boton
formulario.addEventListener('submit', ejecutaValidaciones)
