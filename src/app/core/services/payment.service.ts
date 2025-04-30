import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreatePayment, CreatePaymentResponse } from '../../models/payment.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TransactionResult } from '../../models/transaction.model';

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
 createPayment(paymentData: CreatePayment):Observable<CreatePaymentResponse>{
   return this.http.post<CreatePaymentResponse>(`${this.apiUrl}/createPayment`, paymentData, { headers: this.headers });
 }

 
}
