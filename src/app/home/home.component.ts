import { HttpService } from './../shared/http-service.component';
import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FriendDialog } from './friend-dialog/friend-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  friend = "";
  private subscription: Subscription = new Subscription;

  constructor(public dialog: MatDialog, public conex: HttpService) {
  }

  openFriendDialog(){
    const dialogRef = this.dialog.open(FriendDialog,{
      data: this.friend, autoFocus: true
    })

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result){
        console.log('The dialog was closed');
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
      response => {console.log("Friend "+ response.body.name + " added succesfully!")}
    );
  }

}
