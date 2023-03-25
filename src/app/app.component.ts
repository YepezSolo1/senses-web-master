import { Component } from '@angular/core';
import { ServicioLoginService } from './service/login/servicio-login.service';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 15rem;
      }
    `
  ]
})
export class AppComponent {

  constructor (public servicioLogin: ServicioLoginService){
    
  }

  title = 'senses-web';

  isSideNavCollapsed = false;
  screenWidth= 0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
