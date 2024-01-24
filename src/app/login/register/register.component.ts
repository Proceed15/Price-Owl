import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/api/register.service';
import { ModalService } from '../../_modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import the necessary dependencies
import { User } from 'src/app/models/api/user';
import { AuthService } from 'src/app/services/api/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUserForm: FormGroup; // Define the newUserForm property

  constructor(
    private registerService: RegisterService,
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {
    this.newUserForm = this.formBuilder.group({
      us_nome: ['', Validators.required],
      us_email: ['', [Validators.required, Validators.email]],
      us_senha: ['', Validators.required]
    });
  }

  resetForm() {
    this.newUserForm.reset({
      us_nome: '',
      us_email: '',
      us_senha: ''
    });
  }

  registerUser(): void {
    if (this.newUserForm.valid) {
      const newUserData = this.newUserForm.value as User;
      this.registerService.addUser(newUserData).subscribe((user) => {
        console.log('Usuário criado com sucesso:', user);
        window.alert('Login cadastrado com sucesso!')
        this.auth.login(newUserData.us_email,newUserData.us_senha).subscribe(
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
        this.resetForm();
      });
    }
  }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
