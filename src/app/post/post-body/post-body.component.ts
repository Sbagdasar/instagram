import {Component, Input, OnInit} from '@angular/core';
import {HttpReqServiceService} from '../../http-req-service.service';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.css']
})
export class PostBodyComponent implements OnInit {
  response: any;
  image: any;
  img1: any;
  @Input()
  img: any;

  constructor(private http: HttpReqServiceService) {}

  ngOnInit(): void {
    this.http.getData()
      .subscribe(response => {
        this.response = response;
        console.log(this.response);
        this.image = this.response.map((items: any) => items.download_url);
        this.img1 = this.image[0];
        console.log(this.img1);
      }, error => {
        console.error(error);
      });
  }
}
