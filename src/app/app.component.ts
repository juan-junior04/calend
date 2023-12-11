import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import {FullCalendarComponent } from '@fullcalendar/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { ModalService } from './modal/modalServices/modal.service';
import { Observable } from 'rxjs';
import { ModalDeleteService } from './modal-delete/modal-delete-services/modal-delete.service';
import { DatePipe } from '@angular/common';
import { ModalFechService } from './modal-fech/modal-fech/modal-fech.service';
import { ModalFechComponent } from './modal-fech/modal-fech/modal-fech.component';
import { NotificationService } from './notification/notification.service';
import { MatDrawer } from '@angular/material/sidenav';
import { SharedDataService } from './shared-data.service';
import { ImagenServicesService } from './imagen-view/imagen-services.service';






@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logiado = false;
  bsModalRef!: BsModalRef;
  elementRef: any;

  constructor(private modalService:ModalService,
    private modalDelete:ModalDeleteService,
    private datePipe: DatePipe,
    private modalFech:ModalFechService,
    private modalbs: BsModalService,
    private sharedDataService: SharedDataService,
    private servicesImagen:ImagenServicesService

 
    
    ){
    
  }
  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    this.logiado = isLoggedIn === 'true';


    this.modalService.findAll().subscribe((resp: any) => {

      this.eventos = resp.sort((a:any, b:any) => b.id - a.id);

      this.eventos.forEach(event => {
        // Convierte la fecha final a un objeto Date
        const fechaFinal = new Date(event.finalizar);
        // Agrega un día
        fechaFinal.setDate(fechaFinal.getDate() + 1);
        // Actualiza la propiedad 'end' de cada evento
        event.end = fechaFinal;
        console.log(event.end)
      });
      
      this.sharedDataService.getLoggedIn().subscribe((loggedIn: boolean) => {
        this.logiado = loggedIn;
      });
   
     
      // Define calendarOptions aquí después de cargar los eventos
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin, interactionPlugin],
        events: this.eventos.map(event => ({
          title: event.nombre_empresa,
          start: this.datePipe.transform(event.inicio, 'yyyy-MM-dd') ,
          end:this.datePipe.transform(event.end, 'yyyy-MM-dd', 'GMT+1'),
          id:event.id,
          inicio:event.inicio,
          email: event.email,
          finalizar:event.finalizar,
          nit_empresa: event.nit_empresa,
          direccion: event.direccion,
          telefono: event.telefono,
          backgroundColor: event.color,
          className: 'custom-event',
          observacion: event.observacion,
          barra: event.barra,
          imagen: event.imagen,
        })),
        locale: esLocale,
        eventClick: this.openModalWithEventData.bind(this),
        

        // Otras opciones de configuración
        
      };
  
      
    });

    document.addEventListener('DOMContentLoaded', function() {
      const barra = document.querySelector('.abrirBarras');
      barra?.classList.add('abrirBarra');
   });

   document.addEventListener('DOMContentLoaded', function() {
    const barra = document.querySelector('.abrirBarrasTabla');
    barra?.classList.add('abrirBarra');
 });

  }

  showFiller = false;
  modalOpen: boolean = false;
  eventos:any[]=[]

  @ViewChild('calendar') appComponent: FullCalendarComponent | undefined;
  @ViewChild(MatDrawer) miCajon: MatDrawer | undefined;;

  calendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
      events:this.eventos,
    locale: esLocale,
    eventClick: this.openModalWithEventData.bind(this),
    
    
    // Otras opciones de configuración
  };

  
closeSession() {
  this.logiado = false;
  localStorage.removeItem('isLoggedIn');
}

mostrarImagen(imagen: string) {

  console.log('Mostrar imagen:', imagen);

}


  
  abrirCajon(cajon: MatDrawer) {
    // Cambiar el estado del cajón a abierto
    cajon.open();
    this.adjustMargin()
  }


  adjustMargin() {
    // Verificar que miCajon no sea nulo o indefinido antes de realizar operaciones
    if (this.miCajon) {
      const contenido = document.querySelector('.custom-calendar');
      const contenido2 = document.querySelector('.card');
      const barra = document.querySelector('.abrirBarra');
      const barra2 = document.querySelector('.abrirBarraTabla');
     
      

      if (this.miCajon.opened) {
        contenido?.classList.remove('con-margen');
        contenido2?.classList.remove('con-margen');
        barra?.classList.remove('abrirBarras')
        barra2?.classList.remove('abrirBarras')
  
      } else {
        contenido?.classList.add('con-margen');
        contenido2?.classList.add('con-margen');
        barra?.classList.add('abrirBarras')
        barra2?.classList.add('abrirBarras')
      }
    }
  }

  cerrarCajon(cajon: MatDrawer) {
    // Cambiar el estado del cajón a cerrado
    cajon.close();
    this.adjustMargin()
  }
  openModalFech(evento: any) {
    this.bsModalRef = this.modalbs.show(ModalFechComponent, { class: 'modal-md' });
    this.bsModalRef.content.diaSeleccionado = evento;
  }


  openModalWithEventData(info: any) {
    const evento = {
       // Copia todas las propiedades de fullEvent
      id:info.event.id,
      nombre_empresa: info.event.title,
      email: info.event.extendedProps.email,
      inicio: info.event.extendedProps.inicio,
      finalizar: info.event.extendedProps.finalizar,
      nit_empresa: info.event.extendedProps.nit_empresa,
      observacion:info.event.extendedProps.observacion,
      telefono:info.event.extendedProps.telefono,
      direccion:info.event.extendedProps.direccion,
      color:info.event.backgroundColor,
      barra:info.event.extendedProps.barra,
      imagen:info.event.extendedProps.imagen
  };
  
    this.modalFech.openModal(evento);
    console.log(evento.imagen)
  }

openDelete(event:any){
  console.log(event)
  this.modalDelete.openModal(event);
}
 

  openModal() {
    this.modalService.openModal();
  }

  penModalWithFormData(event:any) {
    const modalRef = this.modalService.openModal(); // Abre el modal

    // Llama a la función cargarEvento en el componente ModalComponent
    modalRef.content.cargarEvento(event);
  }


  //function mes calendario.
  changeMonth(year: number, month: number) {
   
    if (this.appComponent) {
      
      const calendarApi = this.appComponent.getApi(); 
      calendarApi.gotoDate(`${year}-${String(month).padStart(2, '0')}-01`); 
    }
  
  }

  

  getProgressBarClass() {
    return {
      'custom-progress-bar': true,
      'dynamic-background-color': true
    };
  }
 

  openModalImagen(){
    this.servicesImagen.openModal();
  }

  
}
