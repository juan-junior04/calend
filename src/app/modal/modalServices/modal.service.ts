import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  bsModalRef: BsModalRef | undefined;
  selectedColor: string = '';
  

  constructor(private modalService: BsModalService,
    private http:HttpClient) { }

  openModal() {
    this.bsModalRef = this.modalService.show(ModalComponent, { class: 'modal-md' });
    return this.bsModalRef;
  }
  

  close(){
    this.bsModalRef?.hide();
  }

  findAll(){
    return  this.http.get('http://localhost/backend/index.php?action=findAll');
  }

  saveEvent(event:any){
    return this.http.post('http://localhost/backend/index.php?action=save',event);
  }

  updateEvent(event:any){
   
    return this.http.put('http://localhost/backend/index.php?action=update', event)

  }

  deleteEvent(id:number){
    console.log(id)
    const options = {
      
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: id,
    };
    return this.http.delete('http://localhost/backend/index.php?action=delete',options);
  }
  

  setSelectedColor(color: string) {
    this.selectedColor = color;
  }

  getSelectedColor() {
    return this.selectedColor;
  }

}
