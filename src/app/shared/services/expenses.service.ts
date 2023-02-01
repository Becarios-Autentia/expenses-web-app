import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Expense } from '../expense';
import { ExpenseRequest } from '../expense-request';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private baseurl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getExpenses(): Observable<any> {
    return this.http.get(this.baseurl + '/expenses', { observe: 'response' });
  }

  public postExpense(expense: ExpenseRequest): Observable<any> {
    let body = expense;
    return this.http.post(this.baseurl + '/expenses', body, {
      observe: 'response',
    });
  }
}
