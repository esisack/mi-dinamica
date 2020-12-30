import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupType: number = 0

  constructor() { }

  ngOnInit() {

  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.signupType = tabChangeEvent.index

  }

}
