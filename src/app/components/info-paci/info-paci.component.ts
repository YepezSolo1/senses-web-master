import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { ServicioPacienteService } from 'src/app/service/paciente/servicio-paciente.service';

@Component({
  selector: 'app-info-paci',
  templateUrl: './info-paci.component.html',
  styleUrls: ['./info-paci.component.scss']
})
export class InfoPaciComponent {

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
  pacientes:any;

  emailpaci: string | undefined;

  constructor(private ServicioPaci:ServicioPacienteService){
    
  }

  ngOnInit() {
    this.emailpaci = this.ServicioPaci.getEmail();
    this.consultarPaci()
  }
  
  consultarPaci(){

    if (!this.emailpaci){
      return console.log("no jala");
    }
    this.ServicioPaci.consultarPaci(this.emailpaci).subscribe(
      res=>{
        
        // this.paciente.tipo= res.usu.tipo;
        this.paciente.nombre= res.paci.nombre;
        this.paciente.apellido= res.paci.apellido;
        this.paciente.lugarNacimiento= res.paci.lugarNacimiento;
        this.paciente.fechaNacimiento= res.paci.fechaNacimiento;
        this.paciente.domicilio= res.paci.domicilio;
        this.paciente.ocupacion= res.paci.ocupacion;
        this.paciente.estadoCivil= res.paci.estadoCivil;
        this.paciente.sexo= res.paci.sexo;
        this.paciente.edad= res.paci.edad;
        this.paciente.celular= res.paci.celular;
        this.paciente.telCasa= res.paci.telCasa;
        this.paciente.tipoSangre= res.paci.tipoSangre;
        this.paciente.comoSeEntero= res.paci.comoSeEntero;
        this.paciente.email= res.paci.email;
        this.paciente.tratamientoMedicoActual= res.paci.tratamientoMedicoActual;
        this.paciente.tomaMedicamentos= res.paci.tomaMedicamentos;
        this.paciente.alergias= res.paci.alergias;
        this.paciente.cardiopatias= res.paci.cardiopatias;
        this.paciente.alteracionPresionArterial= res.paci.alteracionPresionArterial;
        this.paciente.embarazos= res.paci.embarazos;
        this.paciente.diabetes= res.paci.diabetes;
        this.paciente.hepatitis= res.paci.hepatitis;
        this.paciente.problemasSanguineos= res.paci.problemasSanguineos;
        this.paciente.cancer= res.paci.cancer;
        this.paciente.fiebreReumatica= res.paci.fiebreReumatica;
        this.paciente.enfermedadesOrales= res.paci.enfermedadesOrales;
        this.paciente.inmunosupresion= res.paci.inmunosupresion;
        this.paciente.transtornosEmocionales= res.paci.transtornosEmocionales;
        this.paciente.enfermedadesRespiratorias= res.paci.enfermedadesRespiratorias;
        this.paciente.transtornosGastricos= res.paci.transtornosGastricos;
        this.paciente.epilepsia= res.paci.epilepsia;
        this.paciente.cirujias= res.paci.cirujias;
        this.paciente.VIH= res.paci.VIH;
        this.paciente.otrasAlteraciones= res.paci.otrasAlteraciones;
        this.paciente.observacionesAntecedentes= res.paci.observacionesAntecedentes;
        this.paciente.antecedentesFamiliares= res.paci.antecedentesFamiliares;
        this.paciente.fecha_cita= res.paci.fecha_cita;
        this.paciente.correoDentista= res.paci.correoDentista;
        this.paciente.tipoCita= res.paci.tipoCita;
        this.paciente.descripcion= res.paci.descripcion;
        this.paciente.estatusCita= res.paci.estatusCita;
        

      },
      err=>{
        if(typeof(err.error)=="string"){
          // this.paciente.tipo= "";
          this.paciente.nombre= "";
          this.paciente.apellido= "";
          this.paciente.lugarNacimiento= "";
          this.paciente.fechaNacimiento= "";
          this.paciente.domicilio= "";
          this.paciente.ocupacion= "";
          this.paciente.estadoCivil= "";
          this.paciente.sexo= "";
          this.paciente.edad= "";
          this.paciente.celular= "";
          this.paciente.telCasa= "";
          this.paciente.tipoSangre= "";
          this.paciente.comoSeEntero= "";
          this.paciente.email= "";
          this.paciente.tratamientoMedicoActual= "";
          this.paciente.alergias= "";
          this.paciente.cardiopatias= "";
          this.paciente.alteracionPresionArterial= "";
          this.paciente.embarazos= "";
          this.paciente.diabetes= "";
          this.paciente.hepatitis= "";
          this.paciente.problemasSanguineos= "";
          this.paciente.cancer= "";
          this.paciente.fiebreReumatica= "";
          this.paciente.enfermedadesOrales= "";
          this.paciente.inmunosupresion= "";
          this.paciente.transtornosEmocionales= "";
          this.paciente.enfermedadesRespiratorias= "";
          this.paciente.transtornosGastricos= "";
          this.paciente.epilepsia= "";
          this.paciente.cirujias= "";
          this.paciente.VIH= "";
          this.paciente.otrasAlteraciones= "";
          this.paciente.observacionesAntecedentes= "";
          this.paciente.antecedentesFamiliares= "";
          this.paciente.fecha_cita= "";
          this.paciente.correoDentista= "";
          this.paciente.tipoCita= "";
          this.paciente.descripcion= "";
          this.paciente.estatusCita= "";




        }
        else{
          alert(err.error.error[0].msg);
        }
      }
    );
  }
}
