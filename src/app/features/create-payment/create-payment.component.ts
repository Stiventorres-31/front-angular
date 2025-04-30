import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from '../../core/services/payment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-payment',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-payment.component.html',
  styleUrl: './create-payment.component.css'
})
export class CreatePaymentComponent{

  private formularioBuilder = inject(FormBuilder);
  private paymentService = inject(PaymentService)
  
  paymentForm: FormGroup = this.formularioBuilder.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    type_document:['CC',Validators.required],
    number_document:['',Validators.required],
    amount:[null,[Validators.required, Validators.minLength(0)]],
    currency:['COP',Validators.required]
  });

  paymentUrl=signal<string |null>(null);

  createPaymentOnSubmit() {
    if(this.paymentForm.invalid){
      this.paymentForm.markAllAsTouched();
      return;
    }
   
    this.paymentService.createPayment(this.paymentForm.value).subscribe({
      next:(res)=>{
        this.paymentUrl.set(res.result.url_payment)
      },
      error:(error)=>{
        alert(error.error.message);
      }
    })
  }
}
