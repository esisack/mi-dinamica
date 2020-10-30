import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: number = parseInt(sessionStorage.getItem('userId'));
  
  constructor() { }

  ngOnInit(): void {
  }

}
