import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private baseurl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getFriends(): Observable<any> {
    return this.http.get(this.baseurl + "/friends", {observe: 'response'});
  }

  public postFriend(nombre: string): Observable<any> {
    let body = nombre;
    return this.http.post(this.baseurl + '/friends', body, {observe: 'response'});
  }

  public getExpenses(): Observable<any>{
    return this.http.get(this.baseurl + '/expenses', {observe: 'response'});
  }

  public postExpense(gasto: Expense): Observable<any> {
    let body = gasto;
    return this.http.post(this.baseurl + '/expenses', body, {observe: 'response'});
  }

  public getBalance(): Observable<any>{
    return this.http.get(this.baseurl + '/balance', {observe: 'response'});
  }
}
