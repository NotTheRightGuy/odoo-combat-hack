// create a nextjs endpoint for lending history

// create an endpoint that has a userId in params and fetches the data from the database
// and returns it as json

// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import type { LendingHistory } from "@/types/index";

import createClient from "@/db/server";
import { NextApiRequest } from "next";


export async function handler(req: NextApiRequest) {
    // const { query: { id } } = req
    const { id } = req.query
    return NextResponse.json({ id })
        // res.json(data as LendingHistory[]);
    // const client = createClient();
    // // select rows in which the borrowed_books column contains the id
    // let query = client.from("LendingHistory").select("*").contains("borrowed_books", [id]);

    // try {
    //     const { data, error } = await query;
    //     if (error) throw error;
    //     // return NextResponse.json(data as LendingHistory[]);
    // } catch (error) {
    //     console.error("Error fetching books:", error);
    //     return NextResponse.json(
    //         { error: "An error occurred while fetching books" },
    //         { status: 500 }
    //     );
    // }
}

