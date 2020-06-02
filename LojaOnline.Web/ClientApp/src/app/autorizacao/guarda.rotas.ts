import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { UsuarioService } from '../servicos/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export  class GuardaRotas implements CanActivate {

    constructor(private router: Router, private usuarioServico: UsuarioService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // tslint:disable-next-line: prefer-const
        if (this.usuarioServico.usuario_autenticado()) {
            return true;
        }
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}
