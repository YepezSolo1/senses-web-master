import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})


export class EncabezadoComponent {

  
  isSideNavCollapsed = false;
  screemWidth= 0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screemWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
