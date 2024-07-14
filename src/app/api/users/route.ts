import createClient from "@/db/server";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
  const client = createClient();
  const searchParams = req.nextUrl.searchParams;
  const user_id = searchParams.get("id");

  if (!user_id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    // Delete the user
    const { data, error } = await client
      .from("Users")
      .delete()
      .eq("id", user_id);

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
