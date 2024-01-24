import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionService {

  constructor() { }

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
