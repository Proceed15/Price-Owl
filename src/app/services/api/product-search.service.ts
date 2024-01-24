// product-search.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { groupsSearch } from 'src/app/models/api/groupsSearch';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
  private readonly baseUrl = 'https://owleter.onrender.com/items' || 'http://localhost:3000/items'; // Correct the URL format
  inputValue: string = '';

  constructor(private http: HttpClient) {}

  searchItems(searchTerm: string): Observable<groupsSearch[]> {
    return this.http.get<any>(`${this.baseUrl}/${searchTerm}`).pipe(
      map(res => res),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError('Erro ao carregar itens da Api. Por favor, tente novamente mais tarde.');
      })
    );
  }
}
