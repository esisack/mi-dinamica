import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-out-flow',
  templateUrl: './out-flow.component.html',
  styleUrls: ['./out-flow.component.scss']
})
export class OutFlowComponent implements OnInit {
  
  @Input() monto: number;
  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeOption() {
    this.option = "send";
    this.valueResponse.emit(this.option)
  }
}
