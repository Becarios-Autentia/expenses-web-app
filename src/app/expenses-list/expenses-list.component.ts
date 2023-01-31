import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Expense } from 'src/app/shared/expense';
import { ExpensesService } from '../shared/services/expenses.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css'],
})
export class ExpensesList implements OnInit {
  EXPENSES_DATA: Expense[] = [];

  displayedColumns: string[] = ['name', 'description', 'amount', 'date'];
  dataSource = new MatTableDataSource<Expense>();
  private subscription: Subscription = new Subscription();

  constructor(public conex: ExpensesService) {}

  ngOnInit(): void {
    this.subscription = this.conex.getExpenses().subscribe((response) => {
      this.EXPENSES_DATA = response.body;
      this.dataSource.data = this.EXPENSES_DATA;
      console.log(this.EXPENSES_DATA);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
