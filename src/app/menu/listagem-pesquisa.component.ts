import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/itens';
import { FiltroService } from '../services/filtro.service';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-listagem-pesquisa',
  templateUrl: './listagem-pesquisa.component.html',
  styleUrls: ['./listagem-pesquisa.component.css']
})
export class ListagemPesquisaComponent {
  @Input() itens: Item[] = [];
  public filtros: FiltroService;
  public search: SearchService;
  constructor(public filtro: FiltroService, public searchs:SearchService){
    this.filtros = filtro;
    this.search = searchs;
  }

  filtroAutomatico(filtro: string){
    this.search.searchItens(filtro)
  }


  formatPrice(price: number): string {
    let formattedPrice = price.toFixed(2).replace('.', ',');
    if (formattedPrice.length > 6) {
      formattedPrice = 'R$ ' + formattedPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    } else {
      formattedPrice = 'R$ ' + formattedPrice;
    }
    return formattedPrice;
  }

}

