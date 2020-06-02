import { Injectable, inject, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

private baseURL: string;
private _usuario: Usuario;



set usuario (usuario: Usuario) {
  sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
  this._usuario = usuario;
}

get usuario(): Usuario {
  let usuario_json = sessionStorage.getItem("usuario-autenticado");
  this._usuario = JSON.parse(usuario_json);
  return this._usuario;
}

public usuario_autenticado(): boolean {
  return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
}

public limpar_sessao(){
  sessionStorage.setItem("usuario-autenticado", "");
  this._usuario = null;
}

constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  this.baseURL = baseUrl;
 }

 public verificarUsuario(usuario: Usuario): Observable<Usuario> {

   const headers = new HttpHeaders().set('content-type', 'application/json');

   const body = {
     email: usuario.email,
     senha: usuario.senha
   };

   // tslint:disable-next-line: comment-format
   //this.baseURL 0 raiz do site que pode ser exemplo.: www.lojaOnline.com.br
   return this.http.post<Usuario>(this.baseURL + 'api/usuario/verificarUsuario' , body, { headers});
 }

}
