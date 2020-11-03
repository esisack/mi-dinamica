import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';

@Component({
  selector: 'app-in-link',
  templateUrl: './in-link.component.html',
  styleUrls: ['./in-link.component.scss']
})
export class InLinkComponent implements OnInit {

  @Input() option: string;
  @Input() method: string;
  @Input() message: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Output() valueResponse2: EventEmitter<string> = new EventEmitter();
  operacion: Operacion;

  constructor() { }

  ngOnInit(): void {
  }

  changeOption(option: string) {
    this.method = option
    option = 'amount'

    this.valueResponse.emit(option);
    this.valueResponse2.emit(this.method);
  }
}
