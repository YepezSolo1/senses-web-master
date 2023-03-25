import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioLoginService } from 'src/app/service/login/servicio-login.service';
import { ServicioPacienteService } from 'src/app/service/paciente/servicio-paciente.service';
import jwtDecode from 'jwt-decode'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
[x: string]: any;
navbarOpen = false;

constructor(private router:Router, public servicioLogin:ServicioLoginService, private ServicioPaci:ServicioPacienteService){
  
}


isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

paciente={
  nombre:'',
  apellido:''
}

ngOnInit() {
  this.traerNombre();
}

setNavbarOpen() {
  this.navbarOpen = !this.navbarOpen;
}

traerNombre(){
  let tkn = localStorage.getItem('Token');
    let decode : any;
    if(tkn){
      decode = jwtDecode(tkn);
    }else{
      console.log('no se registró token');
    }
    this.ServicioPaci.consultarPaci(decode.email).subscribe(
      res=>{
        
        // this.paciente.tipo= res.usu.tipo;
        this.paciente.nombre= res.paci.nombre;
        this.paciente.apellido= res.paci.apellido;
        
      },
      err=>{
        if(typeof(err.error)=="string"){
          // this.paciente.tipo= "";
          this.paciente.nombre= "";
          this.paciente.apellido= "";
   
        }
        else{
          alert(err.error.error[0].msg);
        }
      }
    );
}

  
}
