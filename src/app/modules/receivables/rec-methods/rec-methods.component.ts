import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-rec-methods',
  templateUrl: './rec-methods.component.html',
  styleUrls: ['./rec-methods.component.scss']
})
export class RecMethodsComponent implements OnInit {

  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();


  constructor() { }

  public ngOnInit() {
 
  }

  changeOption(option: string) {
    this.valueResponse.emit(option);

  }
}
