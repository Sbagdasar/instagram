import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer-comments',
  templateUrl: './footer-comments.component.html',
  styleUrls: ['./footer-comments.component.css']
})
export class FooterCommentsComponent implements OnInit {
  public isCollapsed = true;
  @Input()
  likes: any;
  @Input()
  comments: any;
  @Output()
  commentsChange: any;
  constructor() { }
  saveComment(event: any): void {
    this.comments.push({
      user: 'user4',
      text : this.commentsChange,
    });
    console.log(this.comments);
  }
  ngOnInit(): void {
  }
}
