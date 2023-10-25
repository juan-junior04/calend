import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from './modalServices/modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent {
  formulario:FormGroup<any>;


  constructor
  (public bsModalRef: BsModalRef,
  private fb: FormBuilder,private modalServices:ModalService,
) 
  {
    this.formulario = this.fb.group({
      id: new FormControl('',Validators.required),
      nombre_empresa: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      telefono: new FormControl('',Validators.required),
      nit_empresa: new FormControl('',Validators.required),
      direccion: new FormControl('',Validators.required),
      observacion: new FormControl('',Validators.required),
      inicio: new FormControl('',Validators.required),
      finalizar: new FormControl('',Validators.required),
    })


  }

  close(){
    this.modalServices.close();
  }

  create() {

  
      const event =  this.formulario.value
  if (!event.id) {
    // Si event.id no está definido, significa que es un nuevo evento y debe ser creado.
    this.modalServices.saveEvent(event).subscribe((response: any) => {
      // Luego de guardar el evento, puedes manejar la respuesta aquí si es necesario.
      console.log('Evento creado:', response);
      window.location.reload();
      // Aquí puedes realizar otras acciones después de guardar el evento.
    },
    );
  } else {
    // Si event.id está definido, significa que el evento ya existe y debe ser actualizado.
    this.modalServices.updateEvent(event).subscribe((response: any) => {
      // Luego de actualizar el evento, puedes manejar la respuesta aquí si es necesario.
      console.log('Evento actualizado:', response);
      // Aquí puedes realizar otras acciones después de actualizar el evento.
    });
  }

}

cargarEventoSeleccionado(evento:any) {
  this.formulario.patchValue({
    nombre_empresa: evento.nombreEmpresa,
    telefono: evento.telefono,
    email: evento.email,
    nit_empresa: evento.nitEmpresa,
    direccion: evento.direccion,
    inicio: evento.fechaInicio,
    finalizar: evento.fechaFinalizacion,
    observacion: evento.observacion
  });
}

  
}

