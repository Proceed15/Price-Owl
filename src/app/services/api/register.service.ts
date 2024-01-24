import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError  } from 'rxjs/operators';
import { User } from 'src/app/models/api/user';
import {Observable,throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'https://owleter.onrender.com' ||'http://localhost:3000';
 
  constructor(private http: HttpClient) {}

  // Método para adicionar um novo usuário
  addUser(newUser: User): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, newUser);
  }

}