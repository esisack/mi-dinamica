import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Operacion } from 'src/app/model/operacion';
import { ReceivablesService } from 'src/app/services/receivables.service';



@Component({
  selector: 'app-rec-qr',
  templateUrl: './rec-qr.component.html',
  styleUrls: ['./rec-qr.component.scss']
})
export class RecQrComponent implements OnInit {

 
  @Input() option: string;
  @Input() method: string;
  @Input() message: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  operacion: Operacion;

  public myAngularxQrCode: string = null;

  constructor(public service: ReceivablesService) {
    this.operacion = this.service.operacion;
    this.myAngularxQrCode = 'Enrique Sisack 12458';

  }
  
  ngOnInit(): void {
  }

}
