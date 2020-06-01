import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import {Router, ActivatedRoute} from '@angular/router';
import {UsuarioService} from './../../servicos/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario;
  public usarioAutenticado: boolean;
  public returnUrl: string;

  constructor( public router: Router, private activateRouter: ActivatedRoute,
                                      private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.returnUrl = this.activateRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar() {

    this.usuarioService.verificarUsuario(this.usuario)
    .subscribe( // retorno do serviço
      data => {

      },
      err => {

      }
    );


  }

}
