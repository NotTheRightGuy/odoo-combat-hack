import { NextRequest, NextResponse } from "next/server";
import createClient from "@/db/server";

export async function GET(req: NextRequest) {
  const client = createClient();
  const searchParams = req.nextUrl.searchParams;
  const book_id = searchParams.get("id");

  if (!book_id) {
    return NextResponse.json({ error: "Book ID is required" }, { status: 400 });
  }

  try {
    // Get all lending history for this book
    const { data: lendingHistory, error: lendingError } = await client
      .from("Lending History")
      .select(
        "user_id, date_of_borrowing, expected_return_date, date_of_return, late_charge"
      )
      .contains("borrowed_book", [parseInt(book_id, 10)]);

    if (lendingError) throw lendingError;

    // Get all unique user IDs who have borrowed this book
    const userIds = Array.from(
      new Set(lendingHistory.map((history) => history.user_id))
    );

    // Get all users who have borrowed this book
    const { data: users, error: usersError } = await client
      .from("Users")
      .select("id, firstName, lastName, email, current_books")
      .in("id", userIds);

    if (usersError) throw usersError;

    // Combine the data
    const borrowers = lendingHistory
      .map((history) => {
        const user = users.find((u) => u.id === history.user_id);
        if (user) {
          return {
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            date_of_borrowing: history.date_of_borrowing,
            expected_return_date: history.expected_return_date,
            date_of_return: history.date_of_return || null,
            late_charge: history.late_charge || 0,
            is_current_borrower: user.current_books.includes(
              parseInt(book_id, 10)
            ),
          };
        }
      })
      .filter(Boolean); // Remove any undefined entries

    return NextResponse.json(borrowers);
  } catch (error) {
    console.error("Error fetching borrowers:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching borrowers" },
      { status: 500 }
    );
  }
}
