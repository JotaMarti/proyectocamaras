//Importando Constantes
import {
    ANGULO_RECTO,
    MAX_ANGULO_TRIANGULO
} from './Constantes.js'

        let triangulos = {
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

class Calculadora {

        toRadian = (num)=> {
        return (num * Math.PI) / 180;
    }



    calculaDatos = (altura, tilt, fov) => {
        triangulos.trianguloSombra.Sladoa = altura;
        triangulos.trianguloSombra.SanguloB = ANGULO_RECTO - tilt - fov;
        triangulos.trianguloSombra.SanguloA = MAX_ANGULO_TRIANGULO - triangulos.trianguloSombra.SanguloB - triangulos.trianguloSombra.SanguloC;
        let { SanguloA, SanguloB, SanguloC , Sladoa } = triangulos.trianguloSombra;
        triangulos.trianguloSombra.Sladob = (Sladoa * Math.sin(this.toRadian(SanguloB))) / Math.sin(this.toRadian(SanguloA));
        triangulos.trianguloSombra.Sladoc = (Sladoa * Math.sin(this.toRadian(SanguloC))) / Math.sin(this.toRadian(SanguloA));
        let {  Sladoc } = triangulos.trianguloSombra;
        triangulos.trianguloCamara.Cladoa = Sladoc;
        triangulos.trianguloCamara.CanguloC = MAX_ANGULO_TRIANGULO - SanguloA;
        triangulos.trianguloCamara.CanguloB = fov;
        triangulos.trianguloCamara.CanguloA = MAX_ANGULO_TRIANGULO - triangulos.trianguloCamara.CanguloB - triangulos.trianguloCamara.CanguloC;
        let { Cladoa, CanguloB, CanguloA } = triangulos.trianguloCamara;
        triangulos.trianguloCamara.Cladob = (Cladoa * Math.sin(this.toRadian(CanguloB))) / Math.sin(this.toRadian(CanguloA));

        let {Sladob} = triangulos.trianguloSombra; 
        let {Cladob} = triangulos.trianguloCamara;

        const resultado = {
            sombraCamara : Math.round(Sladob * 100) / 100,
            distanciaMax : Math.round((Cladob + Sladob) * 100) / 100
        }

     
            /* TODO: borrar una vez acabe de implementar todo  */
            alert(`La sombra de este cámara es ${Math.round(Sladob * 100) / 100}m y la distancia máxima es : ${Math.round((Cladob + Sladob) * 100) / 100}m`);

        return resultado;
    }


}
export default Calculadora;