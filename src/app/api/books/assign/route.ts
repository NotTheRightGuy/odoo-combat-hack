import createClient from "@/db/server";
import { NextRequest, NextResponse } from "next/server";
import type { LendingHistory } from "@/types";

export async function POST(req: NextRequest) {
  const client = createClient();
  const { book_ids, user_id } = await req.json();

  if (!Array.isArray(book_ids)) {
    return NextResponse.json(
      { error: "book_ids must be an array" },
      { status: 400 }
    );
  }

  try {
    // Start transaction
    await client.rpc("begin_transaction");

    // Fetch user
    const { data: user, error: userError } = await client
      .from("Users")
      .select("*")
      .eq("id", user_id)
      .single();

    if (userError) throw new Error("Error fetching user");
    if (!user) throw new Error("User not found");

    // Ensure current_books is an array
    const currentBooks = Array.isArray(user.current_books)
      ? user.current_books
      : [];

    if (currentBooks.length + book_ids.length > 3) {
      return NextResponse.json(
        { error: "User would exceed the borrowing limit" },
        { status: 400 }
      );
    }

    for (const book_id of book_ids) {
      // Fetch book
      const { data: book, error: bookError } = await client
        .from("Books")
        .select("*")
        .eq("id", book_id)
        .single();

      if (bookError) throw new Error(`Error fetching book ${book_id}`);
      if (!book) throw new Error(`Book ${book_id} not found`);
      if (!book.available) throw new Error(`Book ${book_id} is not available`);

      // Update book
      const newQuantity = book.quantity - 1;
      const newAvailability = newQuantity > 0;
      const { error: updateBookError } = await client
        .from("Books")
        .update({ quantity: newQuantity, available: newAvailability })
        .eq("id", book_id);

      if (updateBookError) throw new Error(`Error updating book ${book_id}`);

      // Add book to user's current books
      currentBooks.push(book_id);
    }

    // Update user
    const { error: updateUserError } = await client
      .from("Users")
      .update({ current_books: currentBooks })
      .eq("id", user_id);

    if (updateUserError) throw new Error("Error updating user");

    // Create lending history
    const lendingHistory: Omit<LendingHistory, "id"> = {
      user_id,
      borrowed_book: book_ids,
      date_of_borrowing: new Date().toISOString(),
      expected_return_date: new Date(
        Date.now() + 14 * 24 * 60 * 60 * 1000
      ).toISOString(),
      late_charge: 0,
    };

    const { data: lendingData, error: lendingError } = await client
      .from("Lending History")
      .insert(lendingHistory)
      .select()
      .single();

    if (lendingError) throw new Error("Error creating lending history");

    // Commit transaction
    await client.rpc("commit_transaction");

    return NextResponse.json(lendingData);
  } catch (error) {
    // Rollback transaction
    await client.rpc("rollback_transaction");

    console.error("Error in lending process:", error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
