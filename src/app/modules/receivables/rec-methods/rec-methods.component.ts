import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-rec-methods',
  templateUrl: './rec-methods.component.html',
  styleUrls: ['./rec-methods.component.scss']
})
export class RecMethodsComponent implements OnInit {


  @Input() option: string;
  @Input() method: string;
  @Input() message: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Output() valueResponse2: EventEmitter<string> = new EventEmitter();

  monto: number = null;

  constructor() { }

  public ngOnInit() {
 
  }

  changeOption(option: string) {

    if ( option === 'qr') {
      this.method = "qr"
    } else {
      this.method = "link"
    }
    
console.log(this.method)
    this.valueResponse2.emit(this.method);
    this.valueResponse.emit(option);

  }
}
