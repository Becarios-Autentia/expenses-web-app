import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'friend-dialog',
  templateUrl: 'friend-dialog.html',
})

export class FriendDialog{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<FriendDialog>) {}

    @ViewChild('name-input') myform: any;


    onCancelUserDialog(): void {
      this.myform.resetForm();
      this.dialogRef.close();
    }



}
