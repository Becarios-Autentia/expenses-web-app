import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Expense } from '../expense';

@Injectable({
  providedIn: 'root',
})
export class FriendHttpService {
  private baseurl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getFriends(): Observable<any> {
    return this.http.get(this.baseurl + '/friends', { observe: 'response' });
  }

  public postFriend(nombre: string): Observable<any> {
    let body = { name: nombre };
    return this.http.post(this.baseurl + '/friends', body, {
      observe: 'response',
      responseType: 'text',
    });
  }
}
