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
  getData(user: string): any{
    return localStorage.getItem(user);
  }
}
