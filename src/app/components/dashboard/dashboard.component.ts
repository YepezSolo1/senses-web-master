import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
//SERVICIOS
import { ServicioDentistaService } from 'src/app/service/dentista/servicio-dentista.service';
import { ServicioLoginService } from 'src/app/service/login/servicio-login.service';
import { ServicioPacienteService } from 'src/app/service/paciente/servicio-paciente.service';


// interface SideNavToggle{
//   screenWidth: number;
//   collapsed: boolean;
// }



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})



export class DashboardComponent {

  constructor(private router: Router,
    private ServicioLogin: ServicioLoginService,
    private ServicioDentista: ServicioDentistaService,
    private ServicioPaciente: ServicioPacienteService) { }

  // isSideNavCollapsed = false;
  // screemWidth= 0;

  // onToggleSideNav(data: SideNavToggle): void{
  //   this.screemWidth = data.screenWidth;
  //   this.isSideNavCollapsed = data.collapsed;
  // }
  
  @Input() collapsed = false;
  @Input() screenWidth =0;
 
  getBodyClass(): string {
    let styleClass= '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass= 'body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

}
