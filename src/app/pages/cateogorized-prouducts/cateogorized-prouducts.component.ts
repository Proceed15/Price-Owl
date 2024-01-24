import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesProductService } from 'src/app/services/api/categories-product.service';
import { Category } from 'src/app/models/api/category-group';
@Component({
  selector: 'app-cateogorized-prouducts',
  templateUrl: './cateogorized-prouducts.component.html',
  styleUrls: ['./cateogorized-prouducts.component.css'],
})
export class CateogorizedProuductsComponent implements OnInit {
  idcategory: number = 0;
  category: Category[] = [];
  constructor(
    private route: ActivatedRoute,
    private categorized: CategoriesProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idcategory = params['idcategory'];
      this.getProductCategory();
    });
  }

  getProductCategory() {
    this.categorized.getProductCategory().subscribe(
      (data) => {
        this.category = data;
      },
      (error) => {
        console.error(error);
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
truncateWords(input: string, wordCount: number): string {
  if(wordCount >= 8){
    const words = input.split(' ');
    return words.slice(0, wordCount).join(' ')+'...';
    }else{
      const words = input.split(' ');
      return words.slice(0, wordCount).join(' ')+'...';
    }
}
}