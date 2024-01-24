import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from './services/settings/global-variables.service';
import { AuthStateService } from './services/api/auth-state.service';
import { AuthService } from './services/api/auth.service'; // Importe o serviço de autenticação

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PriceOwl';

  constructor(
    private GlobalVariablesService: GlobalVariablesService,
    private authStateService: AuthStateService,
    private authService: AuthService // Injete o serviço de autenticação
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('api_login-token');
    const tokenId = localStorage.getItem('user_id');
    const tokenUser = localStorage.getItem('user_name');

    const isAuthenticated = !!token;
    const isId = tokenId;
    const isUser = tokenUser;

    this.authStateService.setAuthenticationState(isAuthenticated);
    this.authStateService.setIdUser(Number(isId));
    this.authStateService.setNameUser(String(isUser));    
    this.GlobalVariablesService.isMobile = window.innerWidth < 768;
    this.GlobalVariablesService.isDesktop = window.innerWidth >= 768 && window.innerWidth < 1200;
    this.GlobalVariablesService.isPc = window.innerWidth >= 1200;

  }
}
