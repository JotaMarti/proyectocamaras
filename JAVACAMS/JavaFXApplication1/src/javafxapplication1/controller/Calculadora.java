/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javafxapplication1.controller;

import model.Camara;

/**
 *
 * @author buceo
 */
public class Calculadora {
    
    private final int ANGULO_RECTO = 90; 
    private final int MAX_ANGULO_TRIANGULO = 180; 
    private double SladoA;
    private double SanguloB; 
    private double SanguloA;
    private double SladoB;
    private double SladoC;
    private double CladoA;
    private double CanguloC;
    private double CanguloB ;
    private double CanguloA;
    private double CladoB;
    Camara cam = new Camara();
    
    public double calculaSombra(){
        System.out.println("DESDE SOMBRA : " + cam.getTilt() );
        
        double sombra ; 

        SladoA = cam.getAltura();
        SanguloB = ANGULO_RECTO - cam.getTilt() - cam.getFov() ; 
        SanguloA = MAX_ANGULO_TRIANGULO - SanguloB + ANGULO_RECTO; 
        double sinSanguloB = Math.sin(SanguloB);
        double sinSanguloA = Math.sin(SanguloA);
        SladoB = SladoA * sinSanguloB /sinSanguloA;
        sombra = (SladoB * 100) / 100 ; 
        
    
    return sombra;
    }
    
    public double calculaDistanciaMax(){
        double distancia ; 
        
        SladoC = SladoA * Math.sin(Math.toRadians(ANGULO_RECTO) / Math.sin(Math.toRadians(SanguloA)) );
        CladoA = SladoC; 
        CanguloC = MAX_ANGULO_TRIANGULO - SanguloA; 
        CanguloB = cam.getFov();
        CanguloA = MAX_ANGULO_TRIANGULO - CanguloB - CanguloC;
        double sinCanguloB = Math.sin(CanguloB);
        double sinCanguloA = Math.sin(CanguloA);
        CladoB = CladoA * sinCanguloB /sinCanguloA;
        
        distancia = CladoB + SladoB ; 
        return distancia; 
    }
    
}
