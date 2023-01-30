import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Expense } from 'src/app/shared/expense';
import { Friend } from '../shared/friend';
import { FriendService } from '../shared/services/friend.service';

@Component({
  selector: 'expense-dialog',
  templateUrl: 'expense-dialog.html',
})


export class ExpenseDialog implements OnInit{

  private subscription: Subscription = new Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Expense,
    private dialogRef: MatDialogRef<ExpenseDialog>,
    private friendConex: FriendService) {}

    @ViewChild('expense-form') myform: any;
    friends: Friend[] = [];

    ngOnInit(): void {
      this.subscription = this.friendConex.getFriends()
      .subscribe(
        response => {this.friends = response.body}
      )
    }

    onCancelUserDialog(): void {
      this.myform.resetForm();
      this.dialogRef.close();
    }



}
