import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDeleteComponent } from '../modal-delete.component';
import { ModalService } from 'src/app/modal/modalServices/modal.service';
@Injectable({
  providedIn: 'root'
})
export class ModalDeleteService {
  bsModalRef: BsModalRef | undefined;
  eventoDelete:any;
  constructor(private modalbs: BsModalService,private modalService:ModalService) { }

  openModal(evento:any) {
    this.bsModalRef = this.modalbs.show(ModalDeleteComponent, { class: 'modal-md' });

    this.eventoDelete= evento

  }

  deleteEvent(id: any) {
    console.log(id)
    this.modalService.deleteEvent(id).subscribe(
      (response) => {
        // Eliminación exitosa
        console.log('Evento eliminado:', response);
        window.location.reload();
        // Realizar acciones de actualización de la vista aquí
      },
      
    );
    
  }

  close(){
    this.bsModalRef?.hide();
  }
}

