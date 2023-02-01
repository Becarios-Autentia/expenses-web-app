import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Expense } from '../expense';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  private baseurl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getBalance(): Observable<any> {
    return this.http.get(this.baseurl + '/expenses/balance', {
      observe: 'response',
    });
  }
}
