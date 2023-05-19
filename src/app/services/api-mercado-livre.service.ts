import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Item } from '../models/itens';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiMercadoLivreService {

  private readonly baseUrl = 'https://api.mercadolibre.com/sites/MLB/search';

  constructor(private http: HttpClient) { }

  getItens(searchTerm: string, searchType: string): Observable<Item[]> {
    const params = new HttpParams().set('q', searchTerm).set('sort', searchType);;
    return this.http.get<any>(this.baseUrl, { params }).pipe(
        map(res => res.results),
        catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError('Erro ao carregar itens do Mercado Livre. Por favor, tente novamente mais tarde.');
        })
    );
  }


}
