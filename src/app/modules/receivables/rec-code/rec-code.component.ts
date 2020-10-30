import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Entidad } from 'src/app/model/entidad';
import { Operacion } from 'src/app/model/operacion';

import { ReceivablesService } from "src/app/services/receivables.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-rec-code',
  templateUrl: './rec-code.component.html',
  styleUrls: ['./rec-code.component.scss']
})
export class RecCodeComponent implements OnInit {

  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  operacion: Operacion;
  entidadId: number;

  verify: boolean = false;

  casesForm: FormGroup;
  documento: number = null;
  cliente = '';
  monto: number = null;
  descripcion = '';
  cuota = '';
  entidad: Entidad;
  quotaList = ['Cuotas 1 x 12.100', 'Cuotas 2 x 6300', ' Cuotas 3 x 4500', 'Cuotas 6 x 2800', 'Cuotas 12 x 1600'];
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, public service: ReceivablesService) {
    this.operacion = service.operacion;
    this.operacion.activo = "S";
    this.operacion.descripcion = "Ultima Descripcion";
    this.operacion.monto = 0;
    this.operacion.operacionFecha = new Date();
   }

  ngOnInit(): void {
    this.casesForm = this.formBuilder.group({
      documento: [null],
      cliente: [''],
      monto: [null, Validators.required],
      descripcion: [null, Validators.required],
      cuota: ['Cuotas 1 x 12.100']      
    });
  }

  getEntidadPorDocumento(document: number) {
    this.service.getEntidadByDocument(document).subscribe(data => {
      this.entidad = data;
      console.log(data)            
      this.casesForm.get("cliente").setValue(this.entidad.apellido.concat(' ').concat(this.entidad.nombre))
      console.log(this.casesForm.value)
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
  }

  onVerify() {
    this.verify = true;
    let docvalue = this.casesForm.value.documento
    this.getEntidadPorDocumento(this.casesForm.value.documento);
  }

  onSave() {
    this.service.operacion.monto = this.casesForm.value.monto;
    this.service.operacion.entidadDestino = this.entidad;
  }

  changeOption(option: string) {
    this.service.operacion.monto = this.casesForm.value.monto;
    this.service.operacion.entidadDestino = this.entidad;
    this.valueResponse.emit(option);
  }

}
