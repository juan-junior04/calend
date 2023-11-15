import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { InformeApiService } from '../informe-api/informe-api.service';

@Component({
  selector: 'app-modal-informe',
  templateUrl: './modal-informe.component.html',
  styleUrls: ['./modal-informe.component.css']
})
export class ModalInformeComponent {
  formularioInforme:FormGroup<any>;
  constructor
  (private fb: FormBuilder,private modalServicesInforme:InformeApiService){
    this.formularioInforme= this.fb.group({
      id: new FormControl('',Validators.required),
      fecha: new FormControl('',Validators.required),
      nombre_labor: new FormControl('',Validators.required),
      cantidad: new FormControl('',Validators.required),
      instrumento: new FormControl('',Validators.required),
      observacion: new FormControl('',Validators.required)
    })

  }

  closeInformeModal(){
    this.modalServicesInforme.close();
  }

  createinforme() {
    const event =  this.formularioInforme.value
if (!event.id) {
  // Si event.id no está definido, significa que es un nuevo evento y debe ser creado.
  this.modalServicesInforme.saveInforme(event).subscribe((response: any) => {
    // Luego de guardar el evento, puedes manejar la respuesta aquí si es necesario.
    console.log('Informe creado:', response);
    window.location.reload();
    // Aquí puedes realizar otras acciones después de guardar el evento.
  },
  );
} else {
  // Si event.id está definido, significa que el evento ya existe y debe ser actualizado.
  this.modalServicesInforme.updateInforme(event).subscribe((response: any) => {
    // Luego de actualizar el evento, puedes manejar la respuesta aquí si es necesario.
    console.log('Evento actualizado:', response);
    window.location.reload();
    // Aquí puedes realizar otras acciones después de actualizar el evento.
  });
}

}


cargarEvento(event: any) {
  try {
    this.formularioInforme.setValue(event);
  } catch (error) {
    console.error("Error al cargar el evento:", error);
  }
}
}
