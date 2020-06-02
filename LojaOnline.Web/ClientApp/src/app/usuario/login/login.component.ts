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
  public mensagem: string;
  public ativar_spinner: boolean;

  constructor( public router: Router, private activateRouter: ActivatedRoute,
                                      private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.returnUrl = this.activateRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar() {
    this.ativar_spinner = true;
    this.usuarioService.verificarUsuario(this.usuario)
    .subscribe( // retorno do serviço
      usuario_jason => {
        //essa linha será executada no caso de retorno de sem erros  

        this.usuarioService.usuario = usuario_jason;

        if (this.returnUrl == null) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate([this.returnUrl]);
        }
      },
      err => {
        console.log(err.error);
        this.mensagem = err.error;
        this.ativar_spinner = false;
      }
    );


  }

}
