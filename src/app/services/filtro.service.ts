import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  public selectFilter : string = 'default';
  constructor() { }
}
