import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {

  private url = "http://localhost:3000/usuarios/login";
  private urlUsu = "http://localhost:3000/usuarios";
  private urlPaci = "http://localhost:3000/pacientes/iniciosesion/"
  

  // private url = "http://192.168.100.43:3000/usuarios/login"
  // private urlUsu = "http://192.168.100.43:3000/pacientes"
  // private urlPaci = "http://192.168.100.43:3000/pacientes/iniciosesion"

  constructor(private router:Router, private http:HttpClient) { }
  
  private email: string | undefined;

  getEmail(): string | undefined {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  consultartokenPaci(email: String){
    return this.http.get<any>(this.urlPaci + email);
  }

  guardarUsu(usuario:object){
    return this.http.post<any>(this.urlUsu, usuario)
  }

  modificarUsu(usuario:object){
    return this.http.put<any>(this.urlUsu, usuario)
  }

  eliminarUsu(email:String){
    return this.http.delete<any>(this.urlUsu + "/email/" + email)
  }

  login(usuario:object){
    return this.http.post<any>(this.url, usuario);
  }

  logout(){
    //Elimina una variable del localstorage especificamente 
    //localstorage.removeItem("nombre");
    //Eliminar todas las variables del localstorage
    localStorage.clear();
    //Redireccionamiento a una url especifica
    this.router.navigate(['/inicio']);
  }


  eslogueado():boolean{
    //Verifica si estas logueado devuelve un boolean true o false
    return !!localStorage.getItem('nombre');
  }

  esEmpleado(){
    return !!localStorage.getItem('tipo');
  }
  suNivel(){
    return localStorage.getItem('tipo')
  }


}