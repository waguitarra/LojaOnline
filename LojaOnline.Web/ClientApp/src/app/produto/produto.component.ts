import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../servicos/produto/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
// tslint:disable-next-line: class-name
export class ProdutoComponent implements OnInit {

  public produto: Produto;
  public arquivosSelecionado: File;
  public ativar_spinner: boolean;
  public mensagem: string;

  constructor(private produtoServico: ProdutoService) { }

  ngOnInit() {
    this.produto = new Produto();
  }

  public inputChange(files: FileList) {
    this.arquivosSelecionado = files.item(0);
    this.ativar_spinner = true;
    this.produtoServico.enviarArquivo(this.arquivosSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo; 
          console.log(nomeArquivo);
          this.ativar_spinner = false;
      },
      e => {
        console.log(e.error);
        this.ativar_spinner = false;
      });

  }

  public cadastrar() {
    this.ativaEspera();
    this.produtoServico.cadastrar(this.produto)
    .subscribe(
      produtoJson => {
        console.log(produtoJson);
        this.desativarEspera();
      },
        e => {
          console.log(e.error);
          this.mensagem = e.error;
          this.desativarEspera();
      }
    );
  }

  public ativaEspera() {
    this.ativar_spinner = true;
  }

  public desativarEspera() {
    this.ativar_spinner = false;
  }

}
