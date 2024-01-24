import { Component, OnInit } from '@angular/core';
import { ProductsExibitionService } from 'src/app/services/api/products-exibition.service';
import { Groups } from 'src/app/models/api/groups';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-exibition',
  templateUrl: './product-exibition.component.html',
  styleUrls: ['./product-exibition.component.css']
})
export class ProductExibitionComponent implements OnInit {
  groups: Groups[] = [];
  categorizedGroups: { [key: string]: Groups[] } = {};

  truncateWords(input: string, wordCount: number): string {
    if(wordCount >= 8){
    const words = input.split(' ');
    return words.slice(0, wordCount).join(' ')+'...';
    }else{
      const words = input.split(' ');
      return words.slice(0, wordCount).join(' ')+'...';
    }
  }
  constructor(private router: Router, private productService: ProductsExibitionService) {}

  getItens(): void {
    this.productService.getItens().subscribe(
      (data) => {
        
        this.groups = data;
        
        this.groupByCategory();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  calculeRating(rating: any) {

    let result = '';

    const maxStars = 5;
    const fullStar = '<img width="12px" height="12px" src="../../../assets/images/fullstar.png">';
    const halfStar = '<img width="12px" height="12px" src="../../../assets/images/halfstar.png">';
    const emptyStar = '<img width="12px" height="12px" src="../../../assets/images/emptystar.png">';

    const fullStars = Math.floor(rating);

    const decimalPart = rating % 1;

    for (let i = 0; i < fullStars; i++) {
      result += fullStar;
    }

    if (decimalPart >= 0.1 && decimalPart <= 0.4) {
      result += emptyStar;
    } else if (decimalPart >= 0.6) {
      result += fullStar;
    } else if (decimalPart >= 0.5) {
      result += halfStar;
    }

    const remainingStars = maxStars - fullStars - 1;
    for (let i = 0; i < remainingStars; i++) {
      result += emptyStar;
    }
console.log(rating)
    return result;
  }

  
  groupByCategory(): void {
    this.groups.forEach((group) => {
      const categoryName = group.nomecategoria;
      if (!this.categorizedGroups[categoryName]) {
        this.categorizedGroups[categoryName] = [];
      }
      this.categorizedGroups[categoryName].push(group);
    });
  }

  ngOnInit(): void {
    this.getItens();
    
  }

  categorizedGroupKeys(): string[] {
    return Object.keys(this.categorizedGroups);
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
