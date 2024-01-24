import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './menu/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { InputSearchComponent } from './menu/input-search/input-search.component';
import { ModalModule } from './_modal';
import { ProductExibitionComponent } from './product/product-exibition/product-exibition.component';
import { HttpClientModule } from '@angular/common/http';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { ProductComponent } from './pages/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CateogorizedProuductsComponent } from './pages/cateogorized-prouducts/cateogorized-prouducts.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { FooterComponent } from './menu/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResultsComponent,
    LoginComponent,
    RegisterComponent,
    InputSearchComponent,
    ProductExibitionComponent,
    RecoverPasswordComponent,
    ProductComponent,
    CateogorizedProuductsComponent,
    UserInfoComponent,
    FavoriteComponent,
    FooterComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
