import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrls: ['./footer-buttons.component.css']
})
export class FooterButtonsComponent implements OnInit {

  color = '';
  isLiked = false;
  isSaved = false;
  constructor() { }

  ngOnInit(): void {
  }
  like(id: any): void {
    // this.isLiked ? this.isLiked = false : this.isLiked = true;
    this.isLiked = !this.isLiked;
    localStorage.getItem(`likes ${id}`);
    console.log(localStorage.getItem(`likes 1`));
  }
  save(): void {
    this.isSaved ? this.isSaved = false : this.isSaved = true;
  }
}
