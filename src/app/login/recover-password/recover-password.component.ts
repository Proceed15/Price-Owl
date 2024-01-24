import { Component } from '@angular/core';
import { ModalService } from '../../_modal';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {
  bodyText: string;

  constructor(private modalService: ModalService) { 
    this.bodyText = ""
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
}
