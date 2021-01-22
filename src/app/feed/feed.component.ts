import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{
  title = 'instagram';
  comments = '';
  posts = [{
    id: 1,
    author : `User ${this.randomInteger(1, 4)}`,
    img : '',
    likes : this.randomInteger(50, 300),
    comments: [
      {
        user : 'user2',
        text : 'Cool',
      },
      {
        user : 'user3',
        text : 'So Cool',
      },
    ]
  },
    {
      id: 2,
      author : `User ${this.randomInteger(1, 4)}`,
      img : '',
      likes : this.randomInteger(50, 300),
      comments: [
        {
          user : 'user1',
          text : 'sdcsdc',
        },
        {
          user : 'user3',
          text : 'xv zxv zxv ',
        },
      ]
    },
    {
      id: 3,
      author : `User ${this.randomInteger(1, 4)}`,
      img : '',
      likes : this.randomInteger(50, 300),
      comments: [
        {
          user : 'user1',
          text : 'Cooxvb dfg l',
        },
        {
          user : 'user2',
          text : 'So d gdfg s Cool',
        },
      ]
    },
    {
      id: 4,
      author : `User ${this.randomInteger(1, 4)}`,
      img : '',
      likes : this.randomInteger(50, 300),
      comments: [
        {
          user : 'user1',
          text : 'Cool',
        },
        {
          user : 'user2',
          text : 'So Cool',
        },
      ]
    },
    {
      id: 5,
      author : `User ${this.randomInteger(1, 4)}`,
      img : '',
      likes : this.randomInteger(50, 300),
      comments: [
        {
          user : 'user1',
          text : 'Cool',
        },
        {
          user : 'user2',
          text : 'So Cool',
        },
      ]
    }];
  randomInteger(min: any, max: any): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  ngOnInit(): void {

    // функция  сохранения данных в лс
    for (let i = 0; i < this.posts.length; i++) {
      localStorage.setItem(`id ${this.posts[i].id}`, `${this.posts[i].id.toString()}`);
      localStorage.setItem(`author ${this.posts[i].id}`, this.posts[i].author);
      localStorage.setItem(`likes ${this.posts[i].id}`, `${this.randomInteger(50, 300)}`);
      for ( let comment of this.posts[i].comments){
        this.comments += comment.user + '/' + comment.text + '++';
        localStorage.setItem(`comments ${this.posts[i].id}`, this.comments);
      }
      this.comments = '';
    }
  }
}
