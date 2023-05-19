import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';
import { Item } from '../models/itens';
import { Router } from '@angular/router';
import { FiltroService } from '../services/filtro.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public itens: Item[] = [];
  public filtros: FiltroService;

  constructor(public searchService: SearchService, public router: Router,filtro: FiltroService) {
    this.itens = searchService.itens;
    this.filtros = filtro;

  }

  onInputChanged(event: Event): void {
    this.searchService.inputValue = (event.target as HTMLInputElement).value;

  }

  ngOnInit(): void {
    this.searchService.searchItensReset();
  }

  searchItens(): void {
    this.searchService.searchItens(this.filtros.selectFilter);
  }
  searchItensReset(): void{
  this.searchService.searchItensReset();

  }
}
