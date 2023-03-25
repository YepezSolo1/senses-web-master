import { Component } from '@angular/core';
import { ServicioPacienteService } from 'src/app/service/paciente/servicio-paciente.service';
import { ServicioLoginService } from 'src/app/service/login/servicio-login.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  emailP: any |undefined;
  

  paciente= {
    tipo: "",
    nombre: "",
    apellido: "",
    lugarNacimiento: "",
    fechaNacimiento: "",
    domicilio: "",
    ocupacion: "",
    estadoCivil: "",
    sexo: "",
    edad: "",
    celular: "",
    telCasa: "",
    tipoSangre: "",
    comoSeEntero: "",
    email: "",
    tratamientoMedicoActual: "",
    tomaMedicamentos: "",
    alergias: "",
    cardiopatias: "",
    alteracionPresionArterial: "",
    embarazos: "",
    diabetes: "",
    hepatitis: "",
    problemasSanguineos: "",
    cancer: "",
    fiebreReumatica: "",
    enfermedadesOrales: "",
    inmunosupresion: "",
    transtornosEmocionales: "",
    enfermedadesRespiratorias: "",
    transtornosGastricos: "",
    epilepsia: "",
    cirujias: "",
    VIH: "",
    otrasAlteraciones: "",
    observacionesAntecedentes: "",
    antecedentesFamiliares: "",
    fecha_cita: "",
    correoDentista: "" ,
    tipoCita: "",
    descripcion: "",
    estatusCita:""
  }

  constructor(private ServicioPaci:ServicioPacienteService, private Router:Router, private servicioLogin:ServicioLoginService){}

  
  guardarPaci() {
   
    this.emailP = this.servicioLogin.getEmail();
    this.paciente.email = this.emailP;
    this.ServicioPaci.guardarPaci(this.paciente).subscribe(
      res => {
        alert("Paciente guardado exitosamente");
        // this.limpiarPaci()
        this.Router.navigate(['/login'])
      },
      err => {
        console.log(err);
        // console.log(err);
        // if (typeof (err.error) == "string") {
        //   alert(err.error);
        // } else {
        //   alert(err.error.error[0].msg);
        // }
      }
    );
  }

}
