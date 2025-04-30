
export interface CreatePayment {
  name: string;
  email: string;
  type_document: string;
  number_document: string;
  amount: number;
  currency: string;
}
// Salida esperada desde el backend
export interface CreatePaymentResponse {
  success: boolean;
  code: number;
  message: string;
  result: CreatePaymentResult;
}

export interface CreatePaymentResult {
  transaction_id: number;
  url_payment: string;
}


