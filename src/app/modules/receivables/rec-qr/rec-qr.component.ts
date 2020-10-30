import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rec-qr',
  templateUrl: './rec-qr.component.html',
  styleUrls: ['./rec-qr.component.scss']
})
export class RecQrComponent implements OnInit {

  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();


  public myAngularxQrCode: string = null;
  constructor () {
    // assign a value
    this.myAngularxQrCode = 'Enrique Sisack 12458';
  }
  ngOnInit(): void {
  }

  changeOption(option: string) {

    this.valueResponse.emit(option);

  }
}
