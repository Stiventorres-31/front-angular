import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { PaymentService } from '../../core/services/payment.service';


@Component({
  selector: 'app-transactions',
  standalone:true,
  imports: [NgIf, NgFor, CurrencyPipe, DatePipe, NgClass],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
 private readonly DEFAULT_PAYMENT_METHOD = 'Método no especificado';
  private readonly DEFAULT_DATE = new Date();
  private readonly DEFAULT_NUMBER = '0.00';
  transactions: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private paymentService: PaymentService) {}

  getPaymentMethodName(method: any['payment_method']): string {
    return method?.name || this.DEFAULT_PAYMENT_METHOD;
  }

  getFormattedDate(date: string | null): Date {
    return date ? new Date(date) : this.DEFAULT_DATE;
  }

  getNumericValue(value: string | null): string {
    return value || this.DEFAULT_NUMBER;
  }

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    this.loading = true;
    this.error = null;

    this.paymentService.getTransactions().subscribe({
      next: (data:any) => {
        this.transactions = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar las transacciones';
        this.loading = false;
        console.error('Error fetching transactions:', error);
      }
    });
  }
}
