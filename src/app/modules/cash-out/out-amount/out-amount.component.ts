import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Operacion } from 'src/app/model/operacion';
import { CashOutService } from 'src/app/services/cash-out.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-out-amount',
  templateUrl: './out-amount.component.html',
  styleUrls: ['./out-amount.component.scss']
})
export class OutAmountComponent implements OnInit {

  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  operacion: Operacion;

  verify: boolean = false;

  casesForm: FormGroup;
  monto: number = null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, public service: CashOutService) {
    this.operacion = this.service.operacion;
console.log(this.method)
  }

  ngOnInit(): void {
    this.casesForm = this.formBuilder.group({
      monto: [null, Validators.required]
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
  }

  onVerify() {
    this.verify = true;
  }

  onSave() {
    this.service.operacion.monto = this.casesForm.value.monto;
  }

  changeOption(option: string) {
    if (this.method === 'bank') {
      option = "confirm"
    }
    console.log(this.casesForm.value.monto)
    this.service.operacion.monto = this.casesForm.value.monto;
    this.valueResponse.emit(option);
  }

}
