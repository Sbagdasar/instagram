import {Component, Input, OnInit, Output} from '@angular/core';
import {LocalStorageService} from '../../../local-storage.service';


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
  @Input()
  author: any ;
  @Output()
  commentsChange: any;
  constructor(private storage: LocalStorageService) { }
   saveComment(event: any): void {
     this.comments.push({
       user: `user ${this.randomInteger(1, 9)}`,
       text : this.commentsChange,
     });
     this.storage.setData('user', this.commentsChange);
   }
  ngOnInit(): void {
  }
  randomInteger(min: any, max: any): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
}
