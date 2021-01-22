import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.css']
})
export class PostFooterComponent implements OnInit {
  @Input()
  post: any;
  @Input()
  likes: any;
  @Input()
  comments: any;
  @Input()
  author: any ;
  constructor() { }

  ngOnInit(): void {
  }

}
