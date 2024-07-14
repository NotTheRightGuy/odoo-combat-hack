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
