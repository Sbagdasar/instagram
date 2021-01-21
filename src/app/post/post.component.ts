import {Component, Input, OnInit} from '@angular/core';
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
  goToItemPost(): void{
    this.router.navigate(['post/', this.post.id]);
    console.log(this.post);
  }
}
