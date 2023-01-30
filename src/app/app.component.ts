import { Balance } from './shared/balance';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FriendDialog } from './friend-dialog/friend-dialog.component';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpenseDialog } from './expense-dialog/expense-dialog.component';
import { BalanceDialog } from './balance-dialog/balance-dialog.component';

import { Expense } from './shared/expense';
import { FriendHttpService } from './shared/services/friend-http-service.component';
import { ExpensesHttpService } from './shared/services/expenses-http-service.component';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'expenses-web-app';
  showFiller = false;

  friend = '';
  friendList = {};
  expense = {} as Expense;
  balance = {} as Balance;

  private subscription: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private friendConex: FriendHttpService,
    private expenseConex: ExpensesHttpService
  ) {}

  openFriendDialog() {
    const dialogRef = this.dialog.open(FriendDialog, {
      data: this.friend,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.friend = result;
        this.postFriend();
      } else console.log('Aborted!');
    });
  }

  postFriend() {
    this.subscription = this.friendConex.postFriend(this.friend).subscribe({
      error: (err: HttpErrorResponse) => {
        const snackBar = this.snackBar.open(err.error, '', {
          duration: 2000,
        });
        this.friend = '';
      },
      next: (res: HttpResponse<any>) => {
        const snackBar = this.snackBar.open(res.body, '', {
          duration: 2000,
        });
        this.friend = '';
      },
    });
  }

  openExpenseDialog() {
    const dialogRef = this.dialog.open(ExpenseDialog, {
      data: this.expense,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe((result: Expense) => {
      if (result) {
        this.expense = result;
        this.postExpense();
      } else console.log('Aborted!');
    });
  }

  postExpense() {
    this.subscription = this.expenseConex.postExpense(this.expense).subscribe(
      (response) => {
        const snackBar = this.snackBar.open('Expense added succesfully!', '', {
          duration: 2000,
        });
        this.expense = {} as Expense;
      },
      (error) => {
        const snackBar = this.snackBar.open('Error! Expense not added', '', {
          duration: 2000,
        });
        this.expense = {} as Expense;
      }
    );
  }

  openBalanceDialog() {
    const dialogRef = this.dialog.open(BalanceDialog, {
      data: this.balance,
    });
  }
}
