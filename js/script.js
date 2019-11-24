console.log("Hello Word!");

const ANGULO_RECTO = 90;
const MAX_ANGULO_TRIANGULO = 180;
let triangulos = {
  datosIntroducidos: {
    fovCamara: 0,
    tilt: 0,
    altura: 0
  },
  trianguloSombra: {
    SanguloA: 0,
    SanguloB: 0,
    SanguloC: 90,
    Sladoa: 0,
    Sladob: 0,
    Sladoc: 0
  },
  trianguloCamara: {
    CanguloA: 0,
    CanguloB: 0,
    CanguloC: 0,
    Cladoa: 0,
    Cladob: 0,
    Cladoc: 0
  }
};

let resultados = {
  tilt1: [0, 0],
  tilt2: [0, 0],
  tilt3: [0, 0],
  tilt4: [0, 0],
  tilt5: [0, 0],
  tilt6: [0, 0],
  tilt7: [0, 0],
  tilt8: [0, 0],
  tilt9: [0, 0],
  tilt10: [0, 0],
  tilt11: [0, 0]
};

let tostada = "valores";

function recogeDatosFormulario() {
  borraTabla();
  triangulos.datosIntroducidos.altura = parseInt(document.getElementById("altura").value);
  triangulos.datosIntroducidos.tilt = parseInt(document.getElementById("tilt").value);
  triangulos.datosIntroducidos.fovCamara = parseInt(document.getElementById("fov").value);
  let { fovCamara, tilt, altura } = triangulos.datosIntroducidos;
  triangulos.trianguloSombra.Sladoa = altura;
  triangulos.trianguloSombra.SanguloB = ANGULO_RECTO - tilt - fovCamara;
  triangulos.trianguloSombra.SanguloA = MAX_ANGULO_TRIANGULO - triangulos.trianguloSombra.SanguloB - triangulos.trianguloSombra.SanguloC;
  let { SanguloA, SanguloB, SanguloC } = triangulos.trianguloSombra;
  let { Sladoa } = triangulos.trianguloSombra;
  triangulos.trianguloSombra.Sladob = (Sladoa * Math.sin(toRadian(SanguloB))) / Math.sin(toRadian(SanguloA));
  triangulos.trianguloSombra.Sladoc = (Sladoa * Math.sin(toRadian(SanguloC))) / Math.sin(toRadian(SanguloA));
  let { Sladob, Sladoc } = triangulos.trianguloSombra;
  triangulos.trianguloCamara.Cladoa = Sladoc;
  triangulos.trianguloCamara.CanguloC = MAX_ANGULO_TRIANGULO - SanguloA;
  triangulos.trianguloCamara.CanguloB = fovCamara;
  triangulos.trianguloCamara.CanguloA = MAX_ANGULO_TRIANGULO - triangulos.trianguloCamara.CanguloB - triangulos.trianguloCamara.CanguloC;
  let { Cladoa, CanguloB, CanguloA } = triangulos.trianguloCamara;
  triangulos.trianguloCamara.Cladob = (Cladoa * Math.sin(toRadian(CanguloB))) / Math.sin(toRadian(CanguloA));

  alerta(`La sombra de este cámara es ${Math.round(Sladob * 100) / 100}m y la distancia máxima es : ${Math.round((triangulos.trianguloCamara.Cladob + Sladob) * 100) / 100}m`);

  let SanguloBB;
  let SanguloAA;
  let SladoCC;
  let CanguloBB;
  let CanguloAA;
  let CanguloCC;
  let contador = 1;

  for (let resultado in resultados) {
    SanguloBB = ANGULO_RECTO - fovCamara - contador;
    SanguloAA = MAX_ANGULO_TRIANGULO - ANGULO_RECTO - SanguloBB;
    resultados[resultado][0] = Math.round(((Sladoa * Math.sin(toRadian(SanguloBB))) / Math.sin(toRadian(SanguloAA))) * 100) / 100;
    SladoCC = (Sladoa * Math.sin(toRadian(SanguloC))) / Math.sin(toRadian(SanguloAA));
    CanguloCC = MAX_ANGULO_TRIANGULO - SanguloAA;
    CanguloAA = MAX_ANGULO_TRIANGULO - fovCamara - CanguloCC;
    resultados[resultado][1] = Math.round(((SladoCC * Math.sin(toRadian(CanguloB))) / Math.sin(toRadian(CanguloAA)) + resultados[resultado][0]) * 100) / 100;
    contador++;
  }

  contador = 1;
  for (resultado in resultados) {
    var tableRef = document.getElementById("myTable").getElementsByTagName("tbody")[0];
    var newRow = tableRef.insertRow(tableRef.rows.length);
    var newCell = newRow.insertCell(0);
    var newText = document.createTextNode(String(contador));
    newCell.appendChild(newText);
    var newCell = newRow.insertCell(1);
    var newText = document.createTextNode(String(resultados[resultado][0]) + "m");
    newCell.appendChild(newText);
    var newCell = newRow.insertCell(2);
    var newText = document.createTextNode(String(resultados[resultado][1]) + "m");
    newCell.appendChild(newText);
    contador++;
  }
}

function alerta(datos) {
  alert(datos);
  tostada = "<span>gracias por usar la calculadora</span>";
}

function toRadian(num) {
  return (num * Math.PI) / 180;
}

function borraTabla() {
  var Parent = document.getElementById("tbody");
  while (Parent.hasChildNodes()) {
    Parent.removeChild(Parent.firstChild);
  }
}
