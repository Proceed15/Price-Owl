// auth-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usIdSubject = new BehaviorSubject<number>(0);
  usIdSubject$ = this.usIdSubject.asObservable();

  private usNameSubject = new BehaviorSubject<string>('');
  usNameSubject$ = this.usNameSubject.asObservable();

  setAuthenticationState(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  
  setIdUser(usId: number) {
    this.usIdSubject.next(usId);
  }

  
  setNameUser(usName: string) {
    this.usNameSubject.next(usName);
  }


}
