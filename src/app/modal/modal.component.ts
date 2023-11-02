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
  procentaje = [
    { label: '10%', value:"10"},
    { label: '20%', value:"20"},
    { label: '30%', value:"30"},
    { label: '40%', value:"40"},
    { label: '50%', value:"50"},
    { label: '60%', value:"60"},
    { label: '70%', value:"70"},
    { label: '80%', value:"80"},
    { label: '90%', value:"90"},
    { label: '100%', value:"100"}
]

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
      color: new FormControl('',Validators.required),
      barra: new FormControl('',Validators.required)
    })


  }

  close(){
    this.modalServices.close();
  }
  open(){
    this.modalServices.openModal();
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
      window.location.reload();
      // Aquí puedes realizar otras acciones después de actualizar el evento.
    });
  }

}

cargarEvento(event: any) {
  try {
    // Formatear los campos 'inicio' y 'finalizar' al formato 'mes/día/año'
  
    // Actualizar el objeto 'event' con los campos formateados


    // Actualizar todo el formulario con el objeto 'event' modificado
    this.formulario.setValue(event);
  } catch (error) {
    console.error("Error al cargar el evento:", error);
    // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario.
  }
}
onColorSelected(color: string) {
  // Al seleccionar un color en el input, almacénalo en el servicio
  this.modalServices.setSelectedColor(color);
}

  
}

