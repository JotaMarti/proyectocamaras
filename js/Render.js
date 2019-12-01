import { tbody } from "./Constantes.js";

class Render {
  imprimeTabla = tabla => {
    tabla.map((fila, index) => {
      console.log(fila);

      // por cada fila inyectamos con INNERHTML

      tbody.innerHTML += `<tr>
            <td> ${fila.tilt}</td> 
            <td> ${fila.sombraCamara}</td>
            <td> ${fila.distanciaMax}</td>
         <tr> `;
    });
  };
}
export default Render;

// llamo a generaTabla
// con el json hago un map paara recorrerlo
// por cada iteracion del map cargo un tr con sus td en el html
