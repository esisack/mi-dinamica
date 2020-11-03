import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Operacion } from 'src/app/model/operacion';
import { LoansService } from 'src/app/services/loans.service';
import { ReceivablesService } from 'src/app/services/receivables.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-loan-amount',
  templateUrl: './loan-amount.component.html',
  styleUrls: ['./loan-amount.component.scss']
})
export class LoanAmountComponent implements OnInit {

  @Input() option: string;
  @Input() method: string;
  @Input() message: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Output() valueResponse2: EventEmitter<string> = new EventEmitter();

  operacion: Operacion;
  casesForm: FormGroup;
  monto: number = null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, public service: LoansService) {
    this.operacion = this.service.operacion;
    this.message = ""

console.log(this.method)
  }
  
  ngOnInit(): void {
    this.casesForm = this.formBuilder.group({
      monto: [null, Validators.required]
    });
  }

  changeOption(option: string) {

    if (this.method === 'qr') {
      option = "qr"
    } else {
      option = "link"
    }
    option="simulation"

    this.service.operacion.monto = this.casesForm.value.monto;
    this.valueResponse.emit(option);
  }

  onFormSubmit() {
    this.isLoadingResults = true;
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.casesForm.controls[controlName].hasError(errorName);
  }

  changeValue(monto: number) {
    this.casesForm.get('monto').setValue(monto);
  }

  onSave() {
    this.service.operacion.monto = this.casesForm.value.monto;
  }
}
