import { Component } from '@angular/core';
import { ModalDeleteService } from './modal-delete-services/modal-delete.service';


@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {
  

constructor(private modalDelete:ModalDeleteService){}

closeDelete(){
  this.modalDelete.close();
}

delete(){
  if(this.modalDelete.eventoDelete.nombre_empresa){
    this.modalDelete.deleteEvent(this.modalDelete.eventoDelete)
  }

  if(this.modalDelete.eventoDelete.nombre_labor){
    this.modalDelete.deleteInforme(this.modalDelete.eventoDelete)
  }
  
}

}
