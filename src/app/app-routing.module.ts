import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './pages/results/results.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CateogorizedProuductsComponent } from './pages/cateogorized-prouducts/cateogorized-prouducts.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'results/:inputValue', component: ResultsComponent },
  {path: 'product/:idgrupo', component: ProductComponent},
  {path: 'user-info/:idnome', component: UserInfoComponent},
  {path: 'category/:idcategory', component: CateogorizedProuductsComponent},
  {path: 'favorites/:idplayer', component: FavoriteComponent},
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
