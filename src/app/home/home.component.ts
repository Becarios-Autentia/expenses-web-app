import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FriendDialog } from './friend-dialog/friend-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  friend = "";

  constructor(public dialog: MatDialog) {
  }

  openFriendDialog(){
    const dialogRef = this.dialog.open(FriendDialog,{
      data: this.friend, autoFocus: true
    })

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result){
        console.log('The dialog was closed');
        this.friend = result;
        console.log(this.friend);
      }
      else
        console.log("Aborted!")
    });
  }

}
