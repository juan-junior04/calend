import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalInformeComponent } from '../modal-informe/modal-informe.component';

@Injectable({
  providedIn: 'root'
})
export class InformeApiService {

  bsModalRef: BsModalRef | undefined;

  constructor(private http:HttpClient,private modaloption:BsModalService ) { }

  openModal() {
    this.bsModalRef = this.modaloption.show(ModalInformeComponent, { class: 'modal-sm' });
    return this.bsModalRef;
  }

  close(){
    this.bsModalRef?.hide();
  }


  findAllInforme(){
    return this.http.get('http://localhost/backend/index.php?action=findAllInforme')
  }

  saveInforme(informe:any){
    return this.http.post('http://localhost/backend/index.php?action=saveInforme', informe)
  }

  updateInforme(informe:any){
    return this.http.put('http://localhost/backend/index.php?action=updateInforme',informe)
  }

  deleteInforme(id:number){
    console.log(id)
    const options = {
      
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: id,
    };
    return this.http.delete('http://localhost/backend/index.php?action=deleteInforme',options);
  }
}

