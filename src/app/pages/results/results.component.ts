// results.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSearchService } from 'src/app/services/api/product-search.service';
import { groupsSearch } from 'src/app/models/api/groupsSearch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  groups: groupsSearch[] = [];
  inputValue: string = '';

  
  
  truncateWords(input: string, wordCount: number): string {
    if(wordCount >= 8){
      const words = input.split(' ');
      return words.slice(0, wordCount).join(' ')+'...';
      }else{
        const words = input.split(' ');
        return words.slice(0, wordCount).join(' ')+'...';
      }
  }
  constructor(
    private router: Router,
    private productResult: ProductSearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.inputValue = params['inputValue'];
      this.searchItems(this.inputValue);
    });
  }

  searchItems(searchTerm: string) {
    this.productResult.searchItems(searchTerm).subscribe(
      (result) => {
        this.groups = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  formatPrice(price: any): string {
    if(typeof price === 'string'){
      let formattedPrice = price.replace('.', ',');
      if (formattedPrice.length > 6) {
        formattedPrice = 'R$ ' + formattedPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      } else {
        formattedPrice = 'R$ ' + formattedPrice;
      }
      return formattedPrice;
    }else{
      let formattedPrice = price.toFixed(2).replace('.', ',');
      if (formattedPrice.length > 6) {
        formattedPrice = 'R$ ' + formattedPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      } else {
        formattedPrice = 'R$ ' + formattedPrice;
      }
      return formattedPrice;
    }
  }
}


