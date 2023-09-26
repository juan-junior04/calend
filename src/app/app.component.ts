import { Component, ViewChild } from '@angular/core';
import {FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('calendar') appComponent: FullCalendarComponent | undefined;

  calendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
      events: [
    {
      title: 'Mi evento',
      start: '2023-09-10T00:00:00', // Fecha y hora de inicio
      end: '2023-09-15T12:00:00',   // Fecha y hora de finalización
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
}
