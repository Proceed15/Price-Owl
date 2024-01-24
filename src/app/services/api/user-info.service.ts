import { Injectable } from '@angular/core';
import { User } from 'src/app/models/api/user';
import { Observable,throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class UserInfoService {
  baseUrl =  'https://owleter.onrender.com/user' || 'http://localhost:3000/user'



  constructor(private http: HttpClient) { }
  getUser(idUser: number): Observable<User[]> {
    return this.http.get<any>(this.baseUrl+'/'+idUser).pipe(
        map(res => res),
        catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError('Erro ao carregar itens de produtos. Por favor, tente novamente mais tarde.');
        })
    );
  }
}
