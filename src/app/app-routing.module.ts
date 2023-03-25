import { NgModule } from '@angular/core';
import { PacienteComponent } from './components/paciente/paciente.component';
import { InfoPaciComponent } from './components/info-paci/info-paci.component';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './components/coupens/coupens.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MediaComponent } from './components/media/media.component';
import { PagesComponent } from './components/pages/pages.component';
import { ProductsComponent } from './components/products/products.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CitasComponent } from './components/citas/citas.component';
import { RegistroUsuComponent } from './components/registro-usu/registro-usu.component';
import { MiscitasComponent } from './components/miscitas/miscitas.component';

const routes: Routes=[
  {path:"login", component:LoginComponent},
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component:InicioComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'paciente', component:PacienteComponent},
  {path:'statistic', component:StatisticComponent},
  {path:'coupens', component:CoupensComponent},
  {path:'pages', component:PagesComponent},
  {path:'media', component:MediaComponent},
  {path:'settings', component:SettingsComponent},
  {path:'infopaci', component:InfoPaciComponent},
  {path:'encabezado', component:EncabezadoComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'registro', component:RegistroComponent},
  {path:'cita', component:CitasComponent},
  {path:'registrousu', component:RegistroUsuComponent},
  {path:'miscitas', component:MiscitasComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
