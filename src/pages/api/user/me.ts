// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type User = {
  username: string;
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      res.status(200).json({ username: "username", name: "John Doe" });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
