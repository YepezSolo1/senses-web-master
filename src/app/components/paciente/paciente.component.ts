import { Component } from '@angular/core';
import { ServicioPacienteService } from 'src/app/service/paciente/servicio-paciente.service';
import { Router  } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
// import { Ng2PaginationModule } from 'ng2-pagination/dist/ng2-pagination';

interface Item {
  id: number;
  nombre: string;
}


// interface SideNavToggle{
//   screenWidth: number;
//   collapsed: boolean;
// }


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent {

  // searchInput: string = '';
  // filteredPatients: any;



  pacientes:any | undefined;

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
  

  constructor(private ServicioPaci:ServicioPacienteService, private Router:Router){}

  // ngOnInit() {
  //   this.filterPatients();
  // }
  
  // filterPatients() {
  //   this.filteredPatients = this.pacientes.filter(this.paciente => {
  //     const fullName = this.paciente.nombre + ' ' + this.paciente.apellido;
  //     return fullName.toLowerCase().includes(this.searchInput.toLowerCase());
  //   });
  // }

  guardarPaci() {
    this.ServicioPaci.guardarPaci(this.paciente).subscribe(
      res => {
        alert("Paciente guardado exitosamente");
        this.limpiarPaci()
      },
      err => {
        console.log(err);
        if (typeof (err.error) == "string") {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
      }
    );}

  modificarPaci(){
    this.ServicioPaci.modificar(this.paciente).subscribe(
      res=>{
        alert("Paciente actualizado");
        this.limpiarPaci();
        this.consultarTodoPaci();
      },
      err=>{
        if(typeof(err.error)=="string"){
          alert(err.error);
        }
        else{
          alert(err.error.error[0].msg);
        }
      }
      
    );

  }//cierre metodo modificarEmp

  eliminarPaci(){
    this.ServicioPaci.eliminar(this.paciente.email).subscribe(
      res=>{
        alert("paciente eliminado");
        this.limpiarPaci();
        this.consultarTodoPaci();
      },
      err=>{
        if(typeof(err.error)=="string"){
          alert(err.error);
        }
        else{
          alert(err.error.error[0].msg);
        }
      }
      
    );
  }

  consultarPaci(){

    this.ServicioPaci.consultarPaci(this.paciente.email).subscribe(
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
        this.Router.navigate(['/infopaci']);
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
        }
        else{
          alert(err.error.error[0].msg);
        }
      }
    );

  }//cierre metodo consultarEmp

  consultarTodoPaci(){
    this.pacientes = this.ServicioPaci.consultarTodo();
    console.log(this.paciente);
  }//cierre metodo consultarTodoEmp


  limpiarPaci(){
          this.paciente.tipo= "";
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
  }//cierre metodo limpiarEmp

  redirigiraComponente(email:string){
    this.ServicioPaci.setEmail(email);
    this.Router.navigate(['/infopaci']);
  }


}
