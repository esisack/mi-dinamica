import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormControl, FormBuilder, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-data',
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.scss']
})
export class RegisterDataComponent implements OnInit {

  submitStatus: boolean = false;
  registerForm: FormGroup
  @Input() signupType: number

  firstNameLabel: string
  lastNameLabel: string
  firstNameHint: string
  lastNameHint: string 
  firstNameError: string
  lastNameError: string



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.onChangeType()
    this.initFormValidators()
    this.setPhoneValidation()
  }

  initFormValidators() {
    let dt = 'DNI'
    if (this.signupType == 1) {
      dt = 'CUIT'
    }
    this.registerForm = this.formBuilder.group({
      firstName: [, { validators: [Validators.required], updateOn: "change" }],
      lastName: [, { validators: [Validators.required], updateOn: "change" }],
      docType: [dt , { validators: [Validators.required], updateOn: "change" }],
      document: [, { validators: [Validators.required], updateOn: "change" }],
      phone: [, { updateOn: "change" }],
      email: [, {
        validators: [Validators.required, Validators.email],
        updateOn: "change",
      }],
      password: [, { validators: [Validators.required, Validators.minLength(8), Validators.maxLength(12)], updateOn: "change" }],
    });
  }

  setPhoneValidation() {
    const phoneControl = this.registerForm.get("phone");

    phoneControl.setValidators([
      Validators.pattern("^[0-9]*$"),
      Validators.required,
    ]);
  }

  onChangeType() {
    console.log(this.signupType)
    if (this.signupType == 0) {
      this.firstNameLabel = 'Nombres'
      this.lastNameLabel = 'Apellido'
      this.firstNameHint = 'Ingrese tal como figura en su documento!!'
      this.lastNameHint= 'Ingrese tal como figura en su documento!!'  
      this.firstNameError = 'El campo Nombre es'
      this.lastNameError = 'El campo Apellido es'
    } else {
      this.firstNameLabel = 'Nombre de fantasia'
      this.lastNameLabel = 'Razon Social'
      this.firstNameHint = 'Ingrese tal como la conocen sus clientes!!'
      this.lastNameHint= 'Ingrese tal como figura en AFIP!!'  
      this.firstNameError = 'El campo Nombre de fantasia es'
      this.lastNameError = 'El campo Razon Social es'
    } 
  }


  submitForm() {
    console.log(this.registerForm.valid);
    this.submitStatus = true;
  }

  matcher = new MyErrorStateMatcher();

}
