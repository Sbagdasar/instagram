import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  likeClicked = false;
  homeClicked = true;
  profileClicked = false;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  goToUserProfile(): void {
    this.router.navigate(['profile']);
    this.profileClicked = true;
    this.homeClicked = false;
    this.likeClicked = false;
  }
  ngOnInit(): void {
  }
  homeClick(): void{
    this.homeClicked = true;
    this.likeClicked = false;
    this.profileClicked = false;
  };
  likesClicked(): void{
    this.likeClicked = !this.likeClicked;
    this.homeClicked = false;
    this.profileClicked = false;
  }
}
