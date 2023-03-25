import { Component } from '@angular/core';
import { ServicioLoginService } from 'src/app/service/login/servicio-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usu',
  templateUrl: './registro-usu.component.html',
  styleUrls: ['./registro-usu.component.scss']
})
export class RegistroUsuComponent {

  validacion ={
    valPassword:""
  }

  usuario = {
    email:"",
    password:"",
    tipo:"1"
  }

  constructor(private servicioLogin:ServicioLoginService, private router:Router){}

  registro(){
    if(this.usuario.email != "" && this.usuario.password != "" && this.validacion.valPassword != ""){
      if(this.usuario.password == this.validacion.valPassword){
        this.servicioLogin.guardarUsu(this.usuario).subscribe(
          res => {
            
            alert("Su cuenta esta en proceso, por favor continue y siga con los siguientes pasos.");
            this.servicioLogin.setEmail(this.usuario.email);
            this.router.navigate(['/registro'])
          },
          err => {
            console.log(err);
          }
        );

      }else{
        alert('Porfavor asegurese que las contraseñas coincidan')
      }
      
    }
    
  }

}
