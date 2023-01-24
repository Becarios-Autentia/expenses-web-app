import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'friend-dialog',
  templateUrl: 'friend-dialog.html',
})

export class FriendDialog {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<FriendDialog>) {}

    onCancelUserDialog(): void {
      this.dialogRef.close();
    }



}
