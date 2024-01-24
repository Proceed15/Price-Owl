import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GroupsData } from 'src/app/models/api/groupsData';

@Injectable({
  providedIn: 'root'
})
export class GroupProductsService {
  private readonly baseUrl = 'https://owleter.onrender.com/results' || 'http://localhost:3000/results'; 

  constructor(private http: HttpClient) { }

  // getProductsData(groupId: number): Observable<GroupsData> {
  //   const url = `${this.baseUrl}/${groupId}`; 

  //   return this.http.get<GroupsData>(url).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error(error);
  //       return throwError('Erro ao carregar dados dos produtos. Por favor, tente novamente mais tarde.');
  //     })
  //   );
  // }

  getProductsData(groupId: number): Observable<GroupsData[]> {
    const url = `${this.baseUrl}/${groupId}`; 

    return this.http.get<any[]>(url).pipe(
        map(res => res),
        catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError('Erro ao carregar dados dos produtos. Por favor, tente novamente mais tarde.');
        })
    );
  }
}

