import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DentistaComponent } from './components/dentista/dentista.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AppRoutingModule } from './app-routing.module';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';

import { BodyComponent } from './components/body/body.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { CoupensComponent } from './components/coupens/coupens.component';
import { PagesComponent } from './components/pages/pages.component';
import { MediaComponent } from './components/media/media.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ServicioPacienteService } from './service/paciente/servicio-paciente.service';
import { ServicioLoginService } from './service/login/servicio-login.service';
import { InfoPaciComponent } from './components/info-paci/info-paci.component';
import { HeaderComponent } from './components/header/header.component';
// import { Ng2PaginationModule } from 'ng2-pagination';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule} from '@angular/cdk/menu';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CitasComponent } from './components/citas/citas.component';
import { RegistroUsuComponent } from './components/registro-usu/registro-usu.component';
import { MiscitasComponent } from './components/miscitas/miscitas.component';




@NgModule({
  declarations: [
    AppComponent,
    DentistaComponent,
    EncabezadoComponent,
    LoginComponent,
    SidebarComponent,
    PacienteComponent,
    RegistroComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    InicioComponent,
    InfoPaciComponent,
    HeaderComponent,
    PerfilComponent,
    CitasComponent,
    RegistroUsuComponent,
    MiscitasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordModule,
    FormsModule,
    DividerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    OverlayModule,
    CdkMenuModule,
    MatButtonModule,
    MatMenuModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule
    
    // NgxDatatableModule,
    // Ng2PaginationModule
  ],
  providers: [
    ServicioPacienteService,
    ServicioLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
