import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  public isMobile: boolean = false;
  public isDesktop: boolean = false;
  public isPc: boolean = false;
  
  constructor(){
  this.isMobile = window.innerWidth < 768;
  this.isDesktop = !this.isMobile;
}
}
