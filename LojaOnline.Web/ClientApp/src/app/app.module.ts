import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { LoginComponent } from './usuario/login/login.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { GuardaRotas } from './autorizacao/guarda.rotas';
import { Usuario } from './model/usuario';
import { UsuarioService } from './servicos/usuario/usuario.service';


@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      ProdutoComponent,
      LoginComponent,
      CadastroComponent

   ],
   imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'produto', component: ProdutoComponent , canActivate: [GuardaRotas]},
      { path: 'login', component: LoginComponent},

    ])
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }


//BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),