import { HttpService } from './../shared/http-service.component';
import { Component, ViewChild } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FriendDialog } from './friend-dialog/friend-dialog.component';
import { Subscription } from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";
import { ExpenseDialog } from './expense-dialog/expense-dialog.component';

import { Expense } from '../shared/expense';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  friend = "";
  expense = {} as Expense;
  private subscription: Subscription = new Subscription;

  constructor(public dialog: MatDialog, public conex: HttpService, private snackBar: MatSnackBar) {
  }

  openFriendDialog(){
    const dialogRef = this.dialog.open(FriendDialog,{
      data: this.friend, autoFocus: true
    })

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result){
        this.friend = result;
        this.postFriend();
      }
      else
        console.log("Aborted!")
    });
  }

  postFriend() {
    this.subscription = this.conex.postFriend(this.friend)
    .subscribe(
      response => {const snackBar = this.snackBar.open("Friend added succesfully!", '', {duration: 2000}); this.friend = ""},
      error => {const snackBar = this.snackBar.open("Error! Friend not added", '', {duration: 2000}); this.friend = ""}
    );
  }

    openExpenseDialog(){
      const dialogRef = this.dialog.open(ExpenseDialog,{
        data: this.expense, autoFocus: true
      })

      dialogRef.afterClosed().subscribe((result: Expense) => {
        if (result){
          this.expense = result;
          this.postExpense();
        }
        else
          console.log("Aborted!")
      });
    }

    postExpense() {
      this.subscription = this.conex.postExpense(this.expense)
      .subscribe(
        response => {const snackBar = this.snackBar.open("Expense added succesfully!", '', {duration: 2000}); this.expense = {} as Expense},
        error => {const snackBar = this.snackBar.open("Error! Expense not added", '', {duration: 2000}); this.expense = {} as Expense}
      );
    }

}
