import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpReqServiceService {
  dataUrl = 'https://picsum.photos/v2/list';
  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(this.dataUrl);
  }
}
