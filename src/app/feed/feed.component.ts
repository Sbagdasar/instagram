import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  title = 'instagram';
  posts = [{
    id: 1,
    author : `User ${this.randomInteger(1, 4)}`,
    img : 'https://picsum.photos/200/300',
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
      img : 'https://picsum.photos/200/300',
      likes : this.randomInteger(50, 300),
      comments: [
        {
          user : 'user1',
          text : 'Cool',
        },
        {
          user : 'user3',
          text : 'So Cool',
        },
      ]
    },
    {
      id: 3,
      author : `User ${this.randomInteger(1, 4)}`,
      img : 'https://picsum.photos/200/300',
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
      id: 4,
      author : `User ${this.randomInteger(1, 4)}`,
      img : 'https://picsum.photos/200/300',
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
      img : 'https://picsum.photos/200/300',
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
}
