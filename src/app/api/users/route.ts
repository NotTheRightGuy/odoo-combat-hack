import createClient from "@/db/server";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const client = createClient();
  const searchParams = req.nextUrl.searchParams;
  const user_id = searchParams.get("id");

  if (user_id) {
    // Fetch a single user
    const { data, error } = await client
      .from("Users")
      .select("*")
      .eq("id", user_id)
      .single();

    if (error) {
      console.error("Error fetching user:", error);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  }

 

    }
