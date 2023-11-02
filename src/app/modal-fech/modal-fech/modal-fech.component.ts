import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalFechService } from './modal-fech.service';
import { ModalDeleteService } from 'src/app/modal-delete/modal-delete-services/modal-delete.service';
import { ModalService } from 'src/app/modal/modalServices/modal.service';

@Component({
  selector: 'app-modal-fech',
  templateUrl: './modal-fech.component.html',
  styleUrls: ['./modal-fech.component.css']
})
export class ModalFechComponent {
  evento: any;
  constructor(private modalFech: ModalFechService,
    private modalDelete:ModalDeleteService,
    private modalServices:ModalService) { }
  close(){
    this.modalFech.close();
  }

  deleteEvent(){
    
    this.modalDelete.openModal(this.evento)
    this.close();
  }

  
  updateData() {
      
      const modalRef = this.modalServices.openModal(); // Abre el modal
      console.log(this.evento)
      modalRef.content.cargarEvento(this.evento);
      this.close();

}
  
}
