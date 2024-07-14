export enum Role {
  ADMIN = "admin",
  USER = "user",
  LIBRARIAN = "librarian",
}

export type Books = {
  id?: number; 
  title: string; 
  isbn: number; 
  authors: string[]; 
  publishedDate: string; 
  pageCount: number; 
  description: string; 
  categories: string[];
  thumbnail: string; 
  available: boolean; 
  quantity: number; 
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  current_books: number[];
  books_history: number[];
  password: string;
  role: Role;
};

export type LendingHistory = {
  id?: number;
  user_id: number;
  borrowed_books: number[];
  date_of_borrowing: string;
  expected_return_date: string;
  date_of_return: string;
  late_charge: number;
};
