import createClient from "@/db/server";
import { NextRequest, NextResponse } from "next/server";

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
