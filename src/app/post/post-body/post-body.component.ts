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

  constructor(private getDataService: HttpReqServiceService) {}

  ngOnInit(): void {
    this.getDataService.getData()
      .subscribe(response => {
        this.response = response;
        this.image = this.response.map((items: any) => items.download_url);
        this.img1 = this.image[this.randomInteger(0, 30)];
      }, error => {
        console.error(error);
      });
  }
  randomInteger(min: any, max: any): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
}
