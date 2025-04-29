export interface CreatePayment {
  name: string;
  email: string;
  type_document: string;
  number_document: string;
  amount: number;
  currency: string;
}
export interface Transaction {
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
