// header.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/api/auth.service';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/services/api/auth-state.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  authentic: boolean = false;
  category: number = 0;
  userName: string = '';
  userId: number = 0;
  isMobile: boolean = window.innerWidth <= 768;
  isActive: boolean =  false;
  constructor(private authService: AuthService,private router: Router,public authStateService: AuthStateService) { }

  ngOnInit() {
 
    this.authStateService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.authentic = isAuthenticated; // Atualize authentic quando o estado de autenticação mudar
    });

    this.authStateService.usNameSubject$.subscribe((usName) => {
      this.userName = usName; 
    });

    this.authStateService.usIdSubject$.subscribe((usId) => {
      this.userId = usId; 
    });

    this.checkScreenWidth();
  }

  
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  checkScreenWidth(): void {
    this.isMobile = window.innerWidth <= 768; // Adjust the width based on your design needs
  }

  onLogout() {
    console.log('desconectado');
    this.authService.logout();

    // Verifica se a rota atual é favorites/:iduser
    if (this.router.url.startsWith('/favorites/')) {
        // Redireciona para a rota padrão
        this.router.navigate(['']);
    } else {
        // Continua com o comportamento padrão
        location.reload();
    }
}
  setCategory(category: number){
    this.category = category;
  }

  categoryRoute(){
    this.router.navigate(['/category', this.category]); 
   }
    
}




