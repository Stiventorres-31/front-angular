// Salida esperada desde el backend
export interface TransactionResponse {
  success: boolean;
  code: number;
  message: string;
  result: TransactionResult;
}

export interface TransactionResult {
    id: number;
    customer_id: number;
    payment_method_id: number | null;
    amount: number;
    currency: string;
    fee: number | null;
    total: number | null;
    status: string;
    metadata: any;
    created_at: string;
    updated_at: string;
  }
