import createClient from "@/db/server";

export async function POST(req: Request) {
  /*
   * This is a simple example of a POST request.
   * You can use the Request/NextRequest object to access the incoming request.
   * You can use the Response/NextResponse object to send a response.
   */
  const client = createClient();
  const user = await client.from("Users").select();

  return Response.json(user);
}
