// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthStateService } from './auth-state.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://owleter.onrender.com' ||'http://localhost:3000';
  private tokenKey = 'api_login-token';
  private tokenId = 'user_id';
  private tokenName = 'user_name'
  public idUser: number = 0;
  public nameUser: string = '';

  constructor(private http: HttpClient, private authStateService: AuthStateService) {}

  login(email: string, senha: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, senha }).pipe(
      map((response: any) => {
        console.log('Response from server:', response); // Adicione esta linha
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
          this.authStateService.setAuthenticationState(true);
        }
        if (response.user && response.user.us_id && response.user.us_nome) {
          localStorage.setItem(this.tokenId, response.user.us_id);
          localStorage.setItem(this.tokenName, response.user.us_nome);

          this.authStateService.setIdUser(response.user.us_id);
          this.authStateService.setNameUser(response.user.us_nome);
        
        }
        return response;
      })
    );
  }
  

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.authStateService.setAuthenticationState(false);
    this.authStateService.setIdUser(0)
    this.authStateService.setNameUser('')
 
  }
}
