/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import javafxapplication1.controller.Calculadora;

/**
 *
 * @author buceo
 */
public class Camara {    
    private static double altura; 
    private static double tilt; 
    private static double fov; 
    
    public Camara(){
        
    };
    public Camara(double altura , double tilt , double fov){
        Camara.altura = altura ; 
        Camara.tilt = tilt; 
        Camara.fov = fov ; 
    }

    public void setAltura(double altura) {
        Camara.altura = altura;
    }

    public void setTilt(double tilt) {
        Camara.tilt = tilt;
    }

    public void setFov(double fov) {
        Camara.fov = fov;
    }

    public static double getAltura() {
        return altura;
    }

    public static double getTilt() {
        return tilt;
    }

    public static double getFov() {
        return fov;
    }


    
    public String generaResultado(){
        Calculadora calc = new Calculadora();
        System.out.println("DESDE generaResultado : " + this.getTilt() );
        
       return this.getResultado(calc.calculaSombra(), calc.calculaDistanciaMax());
    }
    
    public String getResultado(double sombra , double distanciaMax){
        String resultado; 
        
        resultado = "La sombra de la cámara es de " + sombra + "la distancia "
                + "máxima es de : " + distanciaMax;
        
        return resultado; 
    }
        
}
