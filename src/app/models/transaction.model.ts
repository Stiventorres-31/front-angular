export interface ApiResponse<T> {
  success: boolean;
  code: number;
  message: string;
  result: T;
}

export interface Pagination<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  total: number;
  per_page: number;
  from: number;
  to: number;
  path: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
}

export interface Transaction {
  id: number;
  customer_id: number;
  payment_method_id: number | null;
  amount: string;
  currency: string;
  fee: number | null;
  total: number | null;
  status: string;
  metadata: {
    raw_data: {
      name: string;
      email: string;
      type_document: string;
      number_document: string;
      amount: number;
      currency: string;
    };
  };
  created_at: string;
  updated_at: string;
  customer: {
    id: number;
    type_document: string;
    number_document: string;
    name: string;
    email: string;
    preferences: any;
    created_at: string;
    updated_at: string;
  };
  payment_method: {
    name: string;
    config: any;
  } | null;
}
export const EMPTY_PAGINATION: Pagination<any> = {
    current_page: 1,
    data: [],
    first_page_url: '',
    last_page: 1,
    last_page_url: '',
    next_page_url: null,
    prev_page_url: null,
    total: 0,
    per_page: 15,
    from: 0,
    to: 0,
    path: '',
    links: []
  };
  
