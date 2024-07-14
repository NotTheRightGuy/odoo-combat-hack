// create an endpoint that has a userId in params and fetches the data from the database
// and returns it as json

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query: { userId } } = req
    res.status(200).json({ userId })
}