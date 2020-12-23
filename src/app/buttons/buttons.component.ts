import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() {
  }
  users: any = ['user1',
    'user2',
    'user3'
  ];
  ngOnInit(): void {
  }
  lolo(): void{
    this.users.push('user');
  }
}
