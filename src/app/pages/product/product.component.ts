import { Component, OnInit, ChangeDetectorRef, HostListener  } from '@angular/core';
import { GroupProductsService } from 'src/app/services/api/group-products.service';
import { GroupsData } from 'src/app/models/api/groupsData';
import { ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { AuthStateService } from 'src/app/services/api/auth-state.service';
import { FavoriteService } from 'src/app/services/api/favorite.service';
import { GlobalVariablesService } from 'src/app/services/settings/global-variables.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  imgFavorite = "../../../assets/images/favorite-none.png"
  groupsD: GroupsData[] = [];
  groupId: number = 0;
  userId: number = 0;
  style: string = "";
  isChecked: boolean = false;
  isAuthentic: boolean = false;
  isMobile: boolean = window.innerWidth <= 768;
  constructor(private cd: ChangeDetectorRef,private favorite: FavoriteService,private auth: AuthStateService, private groupData: GroupProductsService, private route: ActivatedRoute) 
  {

  }
 
  favoriteProduct() {
    console.log('Checkbox clicado');
    if(this.isAuthentic == false){
      window.alert("Você precisa estar logado para favoritar um produto");
    }
    if(this.isAuthentic == true){
    this.favorite.favoriteGroup(this.userId, this.groupId).subscribe(
      (response: any) => {
        if (response.message === 'Grupo favoritado ou apagado com sucesso!') {
          this.isChecked = !this.isChecked;

          if (this.isChecked) {
            this.imgFavorite = '../../../assets/images/favorite.png';
          } else {
            this.imgFavorite = '../../../assets/images/favorite-none.png';
          }
        }
       
      },
      (error) => {
        console.error('Erro ao favoritar o grupo:', error);
        // Trate erros aqui, se necessário.
      }
    );
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  checkScreenWidth(): void {
    this.isMobile = window.innerWidth <= 768; // Adjust the width based on your design needs
  }





  verifyProduct() {
    console.log(this.isChecked);
    this.favorite.checkFavoriteGroup(this.userId, this.groupId).subscribe(
      (data) => {
        this.isChecked = data;
        console.log(data)
        if (this.isChecked) {
          this.imgFavorite = '../../../assets/images/favorite.png';
        } else {
          this.imgFavorite = '../../../assets/images/favorite-none.png';
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getProductsData(groupId: number){
    this.groupData.getProductsData(groupId).subscribe(
      (data) => {
        this.groupsD = data;
      },
      (error) => {
        console.error(error);
      }
    );
    return this.groupsD;
  }
 
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.groupId = params['idgrupo'];
      this.getProductsData(this.groupId);
    });

    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthentic = isAuthenticated; 
    });
    this.auth.usIdSubject$.subscribe((usId) => {
      this.userId = usId;
    });
    if(this.isAuthentic != false){
    this.verifyProduct();
    
  }else{

    this.userId = 0;
  }
  this.checkScreenWidth();
  }
  calculeRating(rating: number) {
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

    return result;
  }
  truncateWords(input: string, wordCount: number): string {
    const words = input.split(' ');
    return words.slice(0, wordCount).join(' ');
  }

  formatPrice(price: any): string {
    if(typeof price === 'string'){
      parseFloat(price)
    }
    let formattedPrice = price.toFixed(2).replace('.', ',');
    if (formattedPrice.length > 6) {
      formattedPrice = 'R$ ' + formattedPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    } else {
      formattedPrice = 'R$ ' + formattedPrice;
    }
    return formattedPrice;
  }
}
  

