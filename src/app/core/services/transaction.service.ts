import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ApiResponse,
  Pagination,
  Transaction,
} from '../../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly apiUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  getTransactions(): Observable<
    ApiResponse<{ transactions: Pagination<Transaction> }>
  > {
    return this.http.get<
      ApiResponse<{ transactions: Pagination<Transaction> }>
    >(`${this.apiUrl}/getTransactions`, { headers: this.headers });
  }
  getTransactionsByUrl(url: string): Observable<ApiResponse<{ transactions: Pagination<Transaction> }>> {
    return this.http.get<ApiResponse<{ transactions: Pagination<Transaction> }>>(url);
  }
}
