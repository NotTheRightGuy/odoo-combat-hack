import createClient from "@/db/server";
import { NextRequest, NextResponse } from "next/server";
import type { Books } from "@/types";

export async function GET(request: NextRequest) {
  const client = createClient();
  const searchParams = request.nextUrl.searchParams;

  const title = searchParams.get("title");
  const author = searchParams.get("author");
  const genre = searchParams.get("genre");
  const year = searchParams.get("year");
  const isbn = searchParams.get("isbn");

  let query = client.from("Books").select("*");

  if (title) {
    query = query.ilike("title", `%${title}%`);
  }
  if (author) {
    // Assuming authors is stored as a string array in Supabase
    query = query.contains("authors", [author]);
  }
  if (genre) {
    // Assuming categories is stored as a string array in Supabase
    query = query.contains("categories", [genre]);
  }
  if (year) {
    // Assuming publishedDate is stored as a string in 'YYYY-MM-DD' format
    query = query.ilike("publishedDate", `${year}%`);
  }
  if (isbn) {
    query = query.eq("isbn", isbn);
  }

  try {
    const { data, error } = await query;
    if (error) throw error;

    return NextResponse.json(data as Books[]);
  } catch (error) {
    console.error("Error fetching books:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching books" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const client = createClient();
  const { id, ...updateData } = await request.json();

  if (!id) {
    return NextResponse.json({ error: "Book ID is required" }, { status: 400 });
  }

  try {
    const { data, error } = await client
      .from("Books")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    if (!data) {
      return NextResponse.json({ error: "Book not found" }, { status: 404 });
    }

    return NextResponse.json(data as Books);
  } catch (error) {
    console.error("Error updating book:", error);
    return NextResponse.json(
      { error: "An error occurred while updating the book" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const client = createClient();
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Book ID is required" }, { status: 400 });
  }

  try {
    const { error } = await client.from("Books").delete().eq("id", id);

    if (error) throw error;

    return NextResponse.json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the book" },
      { status: 500 }
    );
  }
}

const bookFetchingUrl = "https://www.googleapis.com/books/v1/volumes?q=isbn:";

export async function POST(req: NextRequest) {
  const client = createClient();
  const { isbn, quantity }: { isbn: number; quantity: number } =
    await req.json();

  if (!isbn || !quantity) {
    return { error: "Please provide ISBN and Quantity" };
  }

  const response = await fetch(bookFetchingUrl + isbn);
  const data = await response.json();

  const {
    title,
    authors,
    description,
    categories,
    publishedDate,
    pageCount,
    imageLinks,
  } = data.items[0].volumeInfo;
  const bookToAdd = {
    title,
    isbn,
    authors,
    description,
    categories,
    publishedDate,
    pageCount,
    thumbnail: imageLinks.thumbnail,
    available: true,
    quantity,
  };
  const { error, data: books } = await client.from("Books").insert(bookToAdd);
  if (error) {
    return NextResponse.json({ err: "Error adding book", error });
  }
  return NextResponse.json({ message: "Book Added to our DB", books });
}
