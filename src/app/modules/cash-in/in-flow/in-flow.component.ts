import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-in-flow',
  templateUrl: './in-flow.component.html',
  styleUrls: ['./in-flow.component.scss']
})
export class InFlowComponent implements OnInit {
  
  @Input() monto: number;
  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  position = {
    lat: -27.790535,
    lng: -64.264145
  }

  label = {
    color: 'red',
    text: 'Marcador'
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeOption() {
    this.option = "send";
    this.valueResponse.emit(this.option)
  }
}

