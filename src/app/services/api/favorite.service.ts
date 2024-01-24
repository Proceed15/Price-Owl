import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Groups } from 'src/app/models/api/groups';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  apiUrl = 'https://owleter.onrender.com' || 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  favoriteGroup(idUser: number, idGroup: number): Observable<any> {
    const url = `${this.apiUrl}/fav/group/${idUser}/${idGroup}`;

    return this.http.post(url, null).pipe(
      map((response: any) => {
        if (response.message === 'Grupo favoritado ou apagado com sucesso!') {
        }
        return response;
      })
    );
  }

  checkFavoriteGroup(userId: number, groupId: number): Observable<boolean> {
    const url = `${this.apiUrl}/fav/verify/${userId}/${groupId}`;

    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getFavoritesUsers(userId: number): Observable<Groups[]> {
    return this.http.get<any>(`${this.apiUrl}/fav/${userId}`).pipe(
      map((res) => res),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(
          'Erro ao carregar itens de produtos. Por favor, tente novamente mais tarde.'
        );
      })
    );
  }
}
