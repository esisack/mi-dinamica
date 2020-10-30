import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rec-qr-approved',
  templateUrl: './rec-qr-approved.component.html',
  styleUrls: ['./rec-qr-approved.component.scss']
})
export class RecQrApprovedComponent implements OnInit {
  
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
