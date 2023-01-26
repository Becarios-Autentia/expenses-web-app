import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/shared/http-service.component';
import { Expense } from 'src/app/shared/expense';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  EXPENSES_DATA: Expense[] = [];

  displayedColumns: string[] = ['name', 'description', 'amount', 'date'];
  dataSource = new MatTableDataSource<Expense>();
  private subscription: Subscription = new Subscription;

  constructor(public conex: HttpService) {}

  ngOnInit(): void {
    this.subscription = this.conex.getExpenses().subscribe(
      response => {this.EXPENSES_DATA = response.body; console.log(this.EXPENSES_DATA); this.dataSource.data = this.EXPENSES_DATA}
    )
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
