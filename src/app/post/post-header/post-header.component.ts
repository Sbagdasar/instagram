import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {
  @Input()
  author: any ;
  constructor() { }

  ngOnInit(): void {
  }

}
