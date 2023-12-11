import { Component } from '@angular/core';
import { ImagenServicesService } from './imagen-services.service';

@Component({
  selector: 'app-imagen-view',
  templateUrl: './imagen-view.component.html',
  styleUrls: ['./imagen-view.component.css']
})
export class ImagenViewComponent {

  constructor(private servicesImagen:ImagenServicesService){}

  openModalImagen(){
    this.servicesImagen.openModal();
  }
}
