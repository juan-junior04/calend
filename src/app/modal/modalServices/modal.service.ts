import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  bsModalRef: BsModalRef | undefined;

  constructor(private modalService: BsModalService) { }

  openModal() {
    this.bsModalRef = this.modalService.show(ModalComponent, { class: 'modal-lg' });
  }
}
