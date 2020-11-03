import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rec-link',
  templateUrl: './rec-link.component.html',
  styleUrls: ['./rec-link.component.scss']
})
export class RecLinkComponent implements OnInit {

  @Input() option: string;
  @Input() method: string;
  @Input() message: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Output() valueResponse2: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
