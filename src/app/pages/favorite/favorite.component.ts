import { Component, OnInit} from '@angular/core';
import { Groups } from 'src/app/models/api/groups';
import { FavoriteService } from 'src/app/services/api/favorite.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{
  groups: Groups[] = [];
  userId: number = 0;
  constructor(private favoriteService: FavoriteService, private route: ActivatedRoute) {}

  getItens(userId: number): void {
    this.favoriteService.getFavoritesUsers(userId).subscribe(
      (data) => {
        this.groups = data;
        ;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['idplayer'];
    });
      this.getItens(this.userId);
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
