import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent {
  formulario:FormGroup<any>;


  constructor
  (public bsModalRef: BsModalRef,
  private fb: FormBuilder) 
  {

    this.formulario = this.fb.group({
      nombre_empresa: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      telefono: new FormControl('',Validators.required),
      nit_empresa: new FormControl('',Validators.required),
      direccion: new FormControl('',Validators.required),
      observacion: new FormControl('',Validators.required),
      inicio: new FormControl('',Validators.required),
      finalizar: new FormControl('',Validators.required),
    })


  }

    

}

