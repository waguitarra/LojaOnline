import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/servicos/usuario/usuario.service';

@Component({
    selector: 'cadastro-usuario',
    templateUrl: './../cadastro/cadastro.usuario.component.html',
    styleUrls: ['./cadastro.usuario.component.css']
})

export class CadastroUsuarioComponent implements OnInit {

    public usuario: Usuario;
    public usarioAutenticado: boolean;
    public returnUrl: string;
    public mensagem: string;
    public ativar_spinner: boolean;

    constructor(private usuarioServico: UsuarioService) {

    }

    ngOnInit(): void {
        this.usuario = new  Usuario();
    }

    public cadastrar() {

       /* this.usuarioServico.cadastrarUsuario(this.usuario)
            .subscribe(
                usuarioJson => {},
                e => {}
            );*/
    }
}
