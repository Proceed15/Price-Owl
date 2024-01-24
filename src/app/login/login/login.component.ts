import { Component } from '@angular/core';
import { ModalService } from '../../_modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/api/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/api/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  bodyText: string;
  loginForm: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.bodyText = '';
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 2';
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, senha } = this.loginForm.value;
      this.authService.login(email, senha).subscribe(
        (response: any) => {
          if (response.message === 'Autenticado com sucesso') {
            this.closeModal('custom-modal-2');
            location.reload();

          } else {
            console.error('Erro de login:', response.error);
          }
        },
        (error) => {
          console.error('Erro de comunicação:', error);
        }
      );
    }
  }
  
  
}
