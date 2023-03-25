import { Component } from '@angular/core';
import { ServicioPacienteService } from 'src/app/service/paciente/servicio-paciente.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent {


  constructor(private ServicioPaci:ServicioPacienteService, private Router:Router){}


  cita = {
    motivo: ""
   }
  
   paciente = {
    nombre: "",
    apellido: "",
    celular: ""
   }

   
  consultarPaci(){

    let tkn = localStorage.getItem('Token');
    let decode : any;
    if(tkn){
      decode = jwtDecode(tkn);
    }else{
      alert('No has iniciado sesion');
    }
    this.ServicioPaci.consultarPaci(decode.email).subscribe(
      res=>{
        
        // this.paciente.tipo= res.usu.tipo;
        this.paciente.nombre= res.paci.nombre;
        this.paciente.apellido= res.paci.apellido;
        this.paciente.celular= res.paci.celular;
      
      },
      err=>{
        if(typeof(err.error)=="string"){
          // this.paciente.tipo= "";
          this.paciente.nombre= "";
          this.paciente.apellido= "";
          this.paciente.celular= "";
        }
        else{
          alert(err.error.error[0].msg);
        }
      }
    );
  }

}
