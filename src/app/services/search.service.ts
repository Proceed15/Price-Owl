import { Injectable } from '@angular/core';
import { ApiMercadoLivreService } from '../services/api-mercado-livre.service';
import { Item } from '../models/itens';
import { ListagemPesquisaComponent } from '../listagem-pesquisa/listagem-pesquisa.component';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public inputValue: string = '';
  public itens: Item[] = [];


  constructor(public apiML: ApiMercadoLivreService) {

  }

  searchItens(selectFilter: string): void {
    if (this.inputValue.trim() === '') {
      return;
    }

    this.apiML.getItens(this.inputValue,selectFilter).subscribe(
      (result) => {
        this.itens = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchItensReset(): void {
    this.inputValue = '';

    this.apiML.getItens(this.inputValue, 'price_asc').subscribe(
      (result) => {
        this.itens = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
