import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalFechComponent } from './modal-fech.component';

@Injectable({
  providedIn: 'root'
})
export class ModalFechService {
  bsModalRef: BsModalRef | undefined;
  eventoDelete:any;
  constructor(private modalbs: BsModalService,) { }
  openModal(evento: any) {
    this.bsModalRef = this.modalbs.show(ModalFechComponent, { class: 'modal-md' });
    this.bsModalRef.content.evento = evento;
  }

  close(){
    this.bsModalRef?.hide()
  }
}
