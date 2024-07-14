import createClient from "@/db/server";
import { NextRequest } from "next/server";
import type { Books, User, LendingHistory } from "@/types";

export async function POST(req: NextRequest) {
  const client = createClient();
  const { book_id, user_id } = await req.json();
  const { data, error } = await client
    .from("Books")
    .select("*")
    .eq("id", book_id);
  if (error) {
    console.error("Error fetching book:", error);
    return { error: "An error occurred while fetching book" };
  }
  const book: Books = data[0];
  if (!book) {
    return { error: "Book not found" };
  }
  if (!book.available) {
    return { error: "Book is not available" };
  }
  const { data: userData, error: userError } = await client
    .from("User")
    .select("*")
    .eq("id", user_id);
  if (userError) {
    console.error("Error fetching user:", userError);
    return { error: "An error occurred while fetching user" };
  }
  const user: User = userData[0];
  if (!user) {
    return { error: "User not found" };
  }
  if (user.current_books.length >= 3) {
    return { error: "User has borrowed maximum number of books" }; //* User can borrow maximum of 3 books
  }
  // Add Current Book to User and Update Book Availability
  const updatedUser = await client
    .from("User")
    .update({ current_books: [...user.current_books, book_id] })
    .eq("id", user_id);
  const updatedBook = await client
    .from("Books")
    .update({ quantity: book.quantity - 1, available: book.quantity - 1 > 0 });
  // Add Lending History
  const lendingHistory: LendingHistory = {
    user_id,
    borrowed_books: [book_id],
    date_of_borrowing: new Date().toISOString(),
    expected_return_date: new Date(
      Date.now() + 14 * 24 * 60 * 60 * 1000
    ).toISOString(), // * 14 days
    date_of_return: "",
    late_charge: 0,
  };
}
