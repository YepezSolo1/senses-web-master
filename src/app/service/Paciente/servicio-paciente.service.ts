import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPacienteService {

  // private urlUsu = "http://localhost:3000/usuarios";
  private urlPaci = "http://localhost:3000/pacientes";
  private email: string | undefined;

  constructor(private http: HttpClient) { }




  // guardar(
  //   tipo: string,
  //   nombre: string,
  //   apellido: string,
  //   lugarNacimiento: string,
  //   fechaNacimiento: string,
  //   domicilio: string,
  //   ocupacion: string,
  //   estadoCivil: string,
  //   sexo: string,
  //   edad: string,
  //   celular: string,
  //   telCasa: string,
  //   tipoSangre: string,
  //   comoSeEntero: string,
  //   email: string,) 
    
  //   {

  //   const fd = new FormData();
  //   fd.append("tipo", tipo);
  //   fd.append("nombre", nombre);
  //   fd.append("apellido", apellido);
  //   fd.append("lugarNacimiento", lugarNacimiento);
  //   fd.append("fechaNacimiento", fechaNacimiento);
  //   fd.append("domicilio", domicilio);
  //   fd.append("ocupacion", ocupacion);
  //   fd.append("estadoCivil", estadoCivil);
  //   fd.append("sexo", sexo);
  //   fd.append("edad", edad);
  //   fd.append("celular", celular);
  //   fd.append("telCasa", telCasa);
  //   fd.append("tipoSangre", tipoSangre);
  //   fd.append("comoSeEntero", comoSeEntero);
  //   fd.append("email", email);

  //   return this.http.post<any>(this.urlPaci, fd);

  // }

  guardarPaci(paciente: object) {
    return this.http.post<any>(this.urlPaci, paciente);
  }

  guardar(
    tipo: string,
    nombre: string,
    apellido: string,
    lugarNacimiento: string,
    fechaNacimiento: string,
    domicilio: string,
    ocupacion: string,
    estadoCivil: string,
    sexo: string,
    edad: string,
    celular: string,
    telCasa: string,
    tipoSangre: string,
    comoSeEntero: string,
    email: string,
    tratamientoMedicoActual: string,
    tomaMedicamentos: string,
    alergias: string,
    cardiopatias: string,
    alteracionPresionArterial: string,
    embarazos: string,
    diabetes: string,
    hepatitis: string,
    problemasSanguineos: string,
    cancer: string,
    fiebreReumatica: string,
    enfermedadesOrales: string,
    inmunosupresion: string,
    transtornosEmocionales: string,
    enfermedadesRespiratorias: string,
    transtornosGastricos: string,
    epilepsia: string,
    cirujias: string,
    VIH: string,
    otrasAlteraciones: string,
    observacionesAntecedentes: string,
    antecedentesFamiliares: string,
    
    ) 
    
    {

    const fd = new FormData();
    fd.append("tipo", tipo);
    fd.append("nombre", nombre);
    fd.append("apellido", apellido);
    fd.append("lugarNacimiento", lugarNacimiento);
    fd.append("fechaNacimiento", fechaNacimiento);
    fd.append("domicilio", domicilio);
    fd.append("ocupacion", ocupacion);
    fd.append("estadoCivil", estadoCivil);
    fd.append("sexo", sexo);
    fd.append("edad", edad);
    fd.append("celular", celular);
    fd.append("telCasa", telCasa);
    fd.append("tipoSangre", tipoSangre);
    fd.append("comoSeEntero", comoSeEntero);
    fd.append("email", email);

    return this.http.post<any>(this.urlPaci, fd);

  }

  modificar(paciente:object){
    return this.http.put<any>(this.urlPaci,paciente);
  }

  eliminar(dato:String){
    return this.http.delete<any>(this.urlPaci + "/borrar/" + dato);
  }

  consultarPaci(dato:String){
    return this.http.get<any>(this.urlPaci + "/email/" + dato);
  }

  consultarTodo(){
    return this.http.get<any>(this.urlPaci);
  }

  getEmail(): string | undefined {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

}
