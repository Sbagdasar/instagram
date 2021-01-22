import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from '../local-storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: any;
  imgUrl: any;
  constructor(private route: ActivatedRoute,
              private localStorage: LocalStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(111, localStorage.getItem('id'));
      params.id != null ?
        this.post = this.localStorage.getDataById(params.id) : null
    });
  }
  goToItemPost(id: any): void{
    this.router.navigate(['post/', this.post.id]);
    this.imgUrl = localStorage.getItem(`img ${id}`);
    localStorage.setItem(`img ${id}`, this.imgUrl);
    console.log(21212, this.imgUrl);
  }
}
