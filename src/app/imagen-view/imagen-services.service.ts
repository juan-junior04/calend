import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ImagenViewComponent } from './imagen-view.component';

@Injectable({
  providedIn: 'root'
})
export class ImagenServicesService {
  bsModalRef: BsModalRef | undefined;

  constructor(private imagenModal:BsModalService) { }

  openModal() {
    this.bsModalRef = this.imagenModal.show(ImagenViewComponent, { class: 'modal-md' });
  }
}
