import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionResult } from '../../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly apiUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);
  
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  getTransactions():Observable<TransactionResult[]>{
    return this.http.get<TransactionResult[]>(`${this.apiUrl}/getTransactions`,{headers:this.headers})
  }

 
}
