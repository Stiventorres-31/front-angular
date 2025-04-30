import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { TransactionService } from '../../core/services/transaction.service';
import {
  ApiResponse,EMPTY_PAGINATION,Pagination,Transaction,
} from '../../models/transaction.model';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule,NgIf, NgClass],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit {
  private readonly transactionService = inject(TransactionService);

  transactions: Transaction[] = [];
  pagination: Pagination<Transaction> | null = null;

  loading = signal(true);
  error: string | null = null;

  readonly DEFAULTS = {
    PAYMENT_METHOD: 'Método no especificado',
    NUMBER: '0.00',
    DATE: new Date()
  };

  ngOnInit(): void {
    this.loadTransactions();
  }

  get paginationLinks(): Pagination<Transaction>['links'] {
    return this.pagination?.links ?? [];
  }

  loadTransactions(): void {
    this.transactionService
      .getTransactions()
      .pipe(
        catchError((err) => {
          this.error = 'Error al cargar las transacciones';
          console.error(err);
          this.loading.set(false);
          return of({
            success: false,
            code: 500,
            message: 'Error al cargar transacciones',
            result: { transactions: { ...EMPTY_PAGINATION } }
          } as ApiResponse<{ transactions: Pagination<Transaction> }>);
        })
      )
      .subscribe((res) => {
        this.transactions = res.result.transactions.data;
        this.pagination = res.result.transactions;
        this.loading.set(false);
      });
  }

  onPageChange(url: string | null): void {
    if (!url || url === this.pagination?.path) return;

    this.loading.set(true);
    this.error = null;

    this.transactionService.getTransactionsByUrl(url).pipe(
      catchError((err) => {
        console.error('Error al cambiar de página:', err);
        this.error = 'No se pudo cambiar de página';
        this.loading.set(false);

        return of({
          success: false,
          code: 500,
          message: '',
          result: {
            transactions: { ...EMPTY_PAGINATION }
          }
        } as ApiResponse<{ transactions: Pagination<Transaction> }>);
      })
    ).subscribe((res) => {
      this.transactions = res.result.transactions.data;
      this.pagination = res.result.transactions;
      this.loading.set(false);
    });
  }

  getPaymentMethodName(method: Transaction['payment_method']): string {
    return method?.name || this.DEFAULTS.PAYMENT_METHOD;
  }

  getFormattedDate(date: string | null): Date {
    return date ? new Date(date) : this.DEFAULTS.DATE;
  }

  getNumericValue(value: string | number | null): string {
    return value ? String(value) : this.DEFAULTS.NUMBER;
  }
}
