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
  this.modalDelete.deleteEvent(this.modalDelete.eventoDelete)
}

}
