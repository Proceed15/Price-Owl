import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Groups } from 'src/app/models/api/groups';

@Injectable({
  providedIn: 'root'
})
export class ProductsExibitionService {

   baseUrl = 'https://owleter.onrender.com/groupsComplete' || 'http://localhost:3000/groupsComplete';
  


  constructor(private http: HttpClient) { }
  getItens(): Observable<Groups[]> {
    return this.http.get<any>(this.baseUrl).pipe(
        map(res => res),
        catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError('Erro ao carregar itens de produtos. Por favor, tente novamente mais tarde.');
        })
    );
  }
  
}
