import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import {FullCalendarComponent } from '@fullcalendar/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { ModalService } from './modal/modalServices/modal.service';
import { Observable } from 'rxjs';
import { ModalDeleteService } from './modal-delete/modal-delete-services/modal-delete.service';
import { ModalComponent } from './modal/modal.component';




@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bsModalRef!: BsModalRef;
  elementRef: any;

  constructor(private modalService:ModalService,
    private modalDelete:ModalDeleteService,private modalcom:ModalComponent){
    
  }

  ngOnInit() {
    this.modalService.findAll().subscribe((resp:any) =>{
      this.eventos = resp;
      
      });
      console.log(this.eventos);
      
      
  }


  showFiller = false;
  modalOpen: boolean = false;
  eventos:Observable<any>[]=[]

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
    },
     {
      title: 'SOLUCIONES YVR',
      start: '2023-10-23T00:00:00', // Fecha y hora de inicio
      end: '2023-10-28T12:00:00',   // Fecha y hora de finalización
      // Otras propiedades del evento...
    }
    // Otros eventos...
  ],
    locale: esLocale
    // Otras opciones de configuración
  };

  cargarFormu(event: any) {
    this.modalcom.cargarEventoSeleccionado(event); // Primero, carga los datos en el formulario
    this.openModal(); // Luego, abre el modal
  }

openDelete(event:any){
  this.modalDelete.openModal(event);
}
 

  openModal() {
    this.modalService.openModal();
  }


  //function mes calendario.
  changeMonth(year: number, month: number) {
    if (this.appComponent) {
      const calendarApi = this.appComponent.getApi(); 
      calendarApi.gotoDate(`${year}-${String(month).padStart(2, '0')}-01`); 
    }
  }

  lista:any = [{
    id:"1",
    nombre_empresa:"Carupana",
    telefono:"3126190683",
    direccion:"Mz 17 Lt 9",
    email:"juandavidruedaramirez7@gamil.com",
    inicio:"12/05/2023",
    finalizacion:"12/05/2023",
    observacion:"Calibracion de Manometro"
  },{
    id:"1",
    nombre_empresa:"Carupana",
    telefono:"3126190683",
    direccion:"Mz 17 Lt 9",
    email:"juandavidruedaramirez7@gamil.com",
    inicio:"12/05/2023",
    finalizacion:"12/05/2023",
    observacion:"Calibracion de Manometro"
  },
  {
    id:"1",
    nombre_empresa:"Carupana",
    telefono:"3126190683",
    direccion:"Mz 17 Lt 9",
    email:"juandavidruedaramirez7@gamil.com",
    inicio:"12/05/2023",
    finalizacion:"12/05/2023",
    observacion:"Calibracion de Manometro"
  },
  {
    id:"1",
    nombre_empresa:"Carupana",
    telefono:"3126190683",
    direccion:"Mz 17 Lt 9",
    email:"juandavidruedaramirez7@gamil.com",
    inicio:"12/05/2023",
    finalizacion:"12/05/2023",
    observacion:"Calibracion de Manometro"
  },
  {
    id:"1",
    nombre_empresa:"Carupana",
    telefono:"3126190683",
    direccion:"Mz 17 Lt 9",
    email:"juandavidruedaramirez7@gamil.com",
    inicio:"12/05/2023",
    finalizacion:"12/05/2023",
    observacion:"Calibracion de Manometro"
  }]

 
 
}
