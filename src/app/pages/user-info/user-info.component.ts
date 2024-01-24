import { Component, OnInit } from '@angular/core';
import { AuthStateService } from 'src/app/services/api/auth-state.service';
import { UserInfoService } from 'src/app/services/api/user-info.service';
import { User } from 'src/app/models/api/user';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  authentic: boolean = false;
  userName: string = '';
  userId: number = 0;
  user: User = { 
    us_id: 0,
    us_nome: '',
    us_email: '',
    us_senha: '',
  };
  constructor(private auth: AuthStateService,private userInfo: UserInfoService){}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      this.authentic = isAuthenticated; 
    });

    this.auth.usNameSubject$.subscribe((usName) => {
      this.userName = usName; 
    });
    this.auth.usIdSubject$.subscribe((usId) => {
      this.userId = usId; 
    });

  }
  // getUser(userId: number): void {
  //   this.userInfo.getUser(userId).subscribe(
  //     (data) => {
  //       this.user = data;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

}
