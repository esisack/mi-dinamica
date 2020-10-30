import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-in-home',
  templateUrl: './in-home.component.html',
  styleUrls: ['./in-home.component.scss']
})
export class InHomeComponent implements OnInit {

  @Input() monto: number;
  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeOption() {
    this.option = "send";
    this.valueResponse.emit(this.option)
  }
}

