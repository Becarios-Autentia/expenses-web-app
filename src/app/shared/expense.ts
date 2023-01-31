import { Friend } from './friend';

export interface Expense {
  friend: Friend;
  description: string;
  amount: number;
  date: Date;
}
