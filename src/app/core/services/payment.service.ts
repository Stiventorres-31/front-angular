import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreatePayment, Transaction } from '../../models/payment.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  private readonly headers = new HttpHeaders({
   'Content-Type': 'application/json',
   'Accept': 'application/json'
 });
 createPayment(paymentData: CreatePayment){
   return this.http.post(`${this.apiUrl}/createPayment`, paymentData, { headers: this.headers });
 }

 getTransactions():Observable<Transaction[]> {
   return this.http.get<Transaction[]>(`${this.apiUrl}/getTransactions`, { headers: this.headers });
 }
}
