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
          alert(this.produto.nomeArquivo);
          console.log(nomeArquivo);
          this.ativar_spinner = false;
      },
      e => {
        console.log(e.error);
        this.ativar_spinner = false;
      });

  }

  public cadastrar() {
    this.produtoServico.cadastrar(this.produto)
    .subscribe(
      produtoJson => {
        console.log(produtoJson);
      },
        e => {
          console.log(e.console.error);
      }
    );
  }

}
