import { Injectable, inject, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

private baseURL: string;
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
   return this.http.post<Usuario>(this.baseURL + 'api/usuario' , body, { headers});
 }

}
