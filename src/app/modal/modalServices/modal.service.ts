import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal.component';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  bsModalRef: BsModalRef | undefined;

  constructor(private modalService: BsModalService,
    private http:HttpClient) { }

  openModal() {
    this.bsModalRef = this.modalService.show(ModalComponent, { class: 'modal-md' });
  }

  close(){
    this.bsModalRef?.hide();
  }

  findAll(){
    return  this.http.get('http://localhost/backend');
  }

  saveEvent(event:any){
    return this.http.post('http://localhost/backend',event);
  }

  updateEvent(event:any){
    return this.http.patch('http://localhost/backend',event);
  }

  deleteEvent(id:number){
    this.http.delete(`http://localhost/backend/${id}`);
  }

}
