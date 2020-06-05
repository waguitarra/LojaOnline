import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/servicos/usuario/usuario.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'cadastro-usuario',
    templateUrl: './../cadastro/cadastro.usuario.component.html',
    styleUrls: ['./cadastro.usuario.component.css']
})

export class CadastroUsuarioComponent implements OnInit {

    public usuario: Usuario;
    public usuarioCadastrado: boolean;
    public returnUrl: string;
    public mensagem: string;
    public ativar_spinner: boolean;

    constructor(private usuarioServico: UsuarioService) {

    }

    ngOnInit(): void {
        this.usuario = new  Usuario();
    }

    public cadastrar() {
        this.ativar_spinner = true;
        this.usuarioServico.cadastrarUsuario(this.usuario)
            .subscribe(
                usuarioJson => {//Operacao bem sucedida
                    this.usuarioCadastrado = true;
                    this.mensagem = '';
                    this.ativar_spinner = false;
                },
                e => {
                    this.mensagem = e.error;
                    this.ativar_spinner = false;
                }
        );
    }
}
