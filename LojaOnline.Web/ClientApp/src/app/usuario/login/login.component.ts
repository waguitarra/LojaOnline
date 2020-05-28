import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario;
  public usarioAutenticado: boolean;

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email === 'waguitarra@hotmail.com' && this.usuario.senha === '1234') {
      this.usarioAutenticado = true;
    } else {
      this.usarioAutenticado = false;
    }
  }
  ngOnInit() {}
}
