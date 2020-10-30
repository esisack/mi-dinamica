import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceivablesService } from 'src/app/services/receivables.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { TitleCasePipe } from '@angular/common';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-rec-sms',
  templateUrl: './rec-sms.component.html',
  styleUrls: ['./rec-sms.component.scss']
})
export class RecSmsComponent implements OnInit {

  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();


  verify: boolean = false;

  casesForm: FormGroup;

  code: number = null;
  customer = '';
  amount: number = null;
  descrip = '';
  quota = '';
  typeList = ['DNI', 'CUIT'];
  quotaList = ['Cuotas 1 x 12.100', 'Cuotas 2 x 6300', ' Cuotas 3 x 4500', 'Cuotas 6 x 2800', 'Cuotas 12 x 1600'];
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ReceivablesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.casesForm = this.formBuilder.group({
      code: [null],
      customer: ['Enrique Sisack'],
      amount: [null, Validators.required],
      descrip: [null, Validators.required],
      quota: ['Cuotas 1 x 12.100']      
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;

    // this.api.addCases(this.casesForm.value)
    //   .subscribe((res: any) => {
    //     const id = res._id;
    //     this.isLoadingResults = false;
    //     this.router.navigate(['/cases-details', id]);
    //   }, (err: any) => {
    //     console.log(err);
    //     this.isLoadingResults = false;
    //   });
  }

  onVerify() {
    this.verify = true;
  }

  changeOption(option: string) {

    this.valueResponse.emit(option);

  }
}
