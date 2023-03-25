import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioCitaService {

  constructor( private http:HttpClient) { }

  private url = "http://localhost:3000"

  consultar(dato:string){
    return this.http.get<any>(this.url + "/citas/" + dato);
  }

  consultarTodo(){
    return this.http.get<any>(this.url + '/cita');
  }
}
