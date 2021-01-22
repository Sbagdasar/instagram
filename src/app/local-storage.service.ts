import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  setData(user: string, text: string ): void{
    localStorage.setItem('user', user);
    localStorage.setItem('text', text);
  }
  getDataById(id: any): any{
    let data: object;
    let comments = [];
    let commentsLS = localStorage.getItem(`comments ${id}`);
    let comment = commentsLS.split('++');
    for ( let itemComment of comment){
      let itemCommentInfo = itemComment.split('/');
      itemCommentInfo[0] != '' ? comments.push({user: itemCommentInfo[0], text: itemCommentInfo[1]}) : null;
    };
    data = {
      id: id,
      author : localStorage.getItem(`author ${id}`),
      likes : localStorage.getItem(`likes ${id}`),
      comments : comments,
    };
    console.log(11, data);
    return data;
  }
}
