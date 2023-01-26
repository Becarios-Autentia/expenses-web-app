import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Expense } from 'src/app/shared/expense';

@Component({
  selector: 'expense-dialog',
  templateUrl: 'expense-dialog.html',
})

export class ExpenseDialog{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Expense,
    private dialogRef: MatDialogRef<ExpenseDialog>) {}

    @ViewChild('expense-form') myform: any;

    onCancelUserDialog(): void {
      this.myform.resetForm();
      this.dialogRef.close();
    }



}
