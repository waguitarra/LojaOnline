import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/model/produto';


@Injectable({
  providedIn: 'root'
})

export class ProdutoService implements OnInit {

  private _baseUrl: string;
  public produtos: Produto[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  ngOnInit() {
    this.produtos = [];
  }


  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public cadastrar(produto: Produto): Observable<Produto> {

    return this.http.post<Produto>(this._baseUrl + 'api/produto/cadastrar', JSON.stringify(produto), { headers: this.headers });
  }

  public salvar(produto: Produto): Observable<Produto> {

    return this.http.post<Produto>(this._baseUrl + 'api/produto/salvar', JSON.stringify(produto), { headers: this.headers });
  }

  public delete(produto: Produto): Observable<Produto>{

    return this.http.post<Produto>(this._baseUrl + 'api/produto/delete', JSON.stringify(produto), { headers: this.headers });

  }

  public obterTodosProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this._baseUrl + 'api/produto/');
  }

  public obterProdutos(produtoId: number): Observable<Produto> {
    return this.http.get<Produto>(this._baseUrl + 'api/produto/obter');
  }

}
