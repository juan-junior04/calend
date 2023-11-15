import { Component } from '@angular/core';

import { InformeApiService } from './informe-api/informe-api.service';
import { ModalDeleteService } from '../modal-delete/modal-delete-services/modal-delete.service';
@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent {
  informes:any[] =[]
  ngOnInit() {
    this.servicesInforme.findAllInforme().subscribe((resp: any) => {
      this.informes = resp;
    })}
  constructor
  (private servicesInforme:InformeApiService,
    private modalDelete:ModalDeleteService){
    

  }

  deleteInforme(id: any) {
    console.log(id)
    this.servicesInforme.deleteInforme(id).subscribe(
      (response) => {
        // Eliminación exitosa
        console.log('Evento eliminado:', response);
        window.location.reload();
        // Realizar acciones de actualización de la vista aquí
      },
      
    );
    
  }

  updateInforme(event:any) {
    const modalRef = this.servicesInforme.openModal(); // Abre el modal

    // Llama a la función cargarEvento en el componente ModalComponent
    modalRef.content.cargarEvento(event);
  }


  openModalInforme(){
    this.servicesInforme.openModal();
  }

  openDelete(event:any){
    console.log(event)
    this.modalDelete.openModal(event);
  }

}
