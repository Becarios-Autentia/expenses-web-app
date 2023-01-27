import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FriendDialog } from './friend-dialog/friend-dialog.component';
import { ExpenseDialog } from './expense-dialog/expense-dialog.component';
import { BalanceDialog } from './balance-dialog/balance-dialog.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule} from '@angular/material/table';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';

import { ExpensesList } from './expenses-list/expenses-list.component';
import { FriendHttpService } from './shared/services/friend-http-service.component';
import { ExpensesHttpService } from './shared/services/expenses-http-service.component';
import { BalanceHttpService } from './shared/services/balance-http-service.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendDialog,
    ExpenseDialog,
    ExpensesList,
    BalanceDialog
  ],
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ FriendHttpService, ExpensesHttpService, BalanceHttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
