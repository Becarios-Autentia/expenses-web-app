import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Balance } from 'src/app/shared/balance';
import { BalanceHttpService } from '../shared/services/balance-http-service.component';

@Component({
  selector: 'balance-dialog',
  templateUrl: 'balance-dialog.html',
})

export class BalanceDialog implements OnInit{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Balance[],
    private dialogRef: MatDialogRef<BalanceDialog>,
    public conex: BalanceHttpService) {}

  private subscription: Subscription = new Subscription;

  @ViewChild('name-input') myform: any;

  BALANCE_DATA: Balance[] = [];

  displayedColumns: string[] = ['name', 'amount'];
  dataSource = new MatTableDataSource<Balance>();

  onCancelUserDialog(): void {
    this.myform.resetForm();
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.subscription = this.conex.getBalance().subscribe(
      response => {
                   this.BALANCE_DATA = response.body;
                   this.dataSource.data = this.BALANCE_DATA
                  }
    )
  }



}
