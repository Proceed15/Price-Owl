import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiMercadoLivreService } from './services/api-mercado-livre.service';
import { ListagemPesquisaComponent } from './listagem-pesquisa/listagem-pesquisa.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    ListagemPesquisaComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, })
  ],
  providers: [ApiMercadoLivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
