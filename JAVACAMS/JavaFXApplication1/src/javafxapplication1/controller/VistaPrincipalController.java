/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javafxapplication1.controller;

import static java.lang.Double.parseDouble;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import model.Camara;

/**
 * FXML Controller class
 *
 * @author buceo
 */
public class VistaPrincipalController implements Initializable {

    @FXML
    private Button btnCalcular;
    @FXML
    private Button btnBorrar;
    @FXML
    private TextField txtFov;
    @FXML
    private TextField txtTilt;
    @FXML
    private TextField txtAltura;
    @FXML
    private TextArea txtResult;

    /**
     * Initializes the controller class.
     */
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
    }    

    @FXML
    private void calcula(ActionEvent event) {
        Camara cam = new Camara();
        
        cam.setFov( parseDouble(txtFov.getText()) ) ;
        cam.setTilt( parseDouble(txtTilt.getText()) );
        cam.setAltura( parseDouble(txtAltura.getText()) );
        
        txtResult.setText( cam.generaResultado() ) ;
        System.out.println("DESDE El CONTROLADOR : " + cam.getTilt() );
    }

    @FXML
    private void borra(ActionEvent event) {
        this.txtAltura.setText("");
        this.txtFov.setText("");
        this.txtTilt.setText("");
        this.txtResult.setText("");
    }
    
}
