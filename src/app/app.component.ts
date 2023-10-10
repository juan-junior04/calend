import { Component, ViewChild } from '@angular/core';
import {FullCalendarComponent } from '@fullcalendar/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { ModalService } from './modal/modalServices/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bsModalRef!: BsModalRef;

  constructor(private modalService:ModalService){
   
  }
  showFiller = false;
  modalOpen: boolean = false;

  @ViewChild('calendar') appComponent: FullCalendarComponent | undefined;

  calendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
      events: [
   
     
    
    {
      title: 'Mi evento',
      start: '2023-09-10T00:00:00', // Fecha y hora de inicio
      end: '2023-09-15T12:00:00',   // Fecha y hora de finalización
      classNames: 'no-underline',
      // Otras propiedades del evento...
    },
    {
      title: 'Mi evento',
      start: '2023-09-10T00:00:00', // Fecha y hora de inicio
      end: '2023-09-15T12:00:00',   // Fecha y hora de finalización
      // Otras propiedades del evento...
    }
    // Otros eventos...
  ],
    locale: esLocale
    // Otras opciones de configuración
  };


 

  openModal() {
    this.modalService.openModal();
  }
}
