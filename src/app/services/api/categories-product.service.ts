import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Category } from 'src/app/models/api/category-group';
@Injectable({
  providedIn: 'root'
})
export class CategoriesProductService {
  baseurl: string =  'https://owleter.onrender.com/categoriesGroups' || 'http://localhost:3000/categoriesGroups';

  constructor(private http: HttpClient) { }
  getProductCategory(): Observable<Category[]> {
    return this.http.get<any>(this.baseurl).pipe(
        map(res => res),
        catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError('Erro ao carregar itens de produtos. Por favor, tente novamente mais tarde.');
        })
    );
  }
}
