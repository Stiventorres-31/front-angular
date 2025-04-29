import { Routes } from '@angular/router';
import { CreatePaymentComponent } from './features/create-payment/create-payment.component';
import { TransactionsComponent } from './features/transactions/transactions.component';

export const routes: Routes = [
  {
    path: 'create-payment',
    loadComponent: () =>
      import('./features/create-payment/create-payment.component').then(
        (m) => m.CreatePaymentComponent
      ),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./features/transactions/transactions.component').then(
        (m) => m.TransactionsComponent
      ),
  },
  { path: '', redirectTo: '/create-payment', pathMatch: 'full' },
];
