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
  // getData(user: string): any{
  //   return localStorage.getItem(user);
  // }
  getDataById(id: any): any{
    let data: object;
    data = {
      id: id,
      author : localStorage.getItem('author'),
      likes : localStorage.getItem(`likes`),
      img : localStorage.getItem(`img`),
    };
    console.log(11, data);
    return data;
  }
}
