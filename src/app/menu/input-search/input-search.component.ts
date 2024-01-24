// input-search.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductSearchService } from 'src/app/services/api/product-search.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {
  constructor(private router: Router, private searchService: ProductSearchService) {}

  onInputChanged(event: Event): void {
    this.searchService.inputValue = (event.target as HTMLInputElement).value;
  }

  searchItems() {
    if (this.searchService.inputValue) {
      this.router.navigate(['/results', this.searchService.inputValue]);
    }
  }
}
