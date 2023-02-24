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
  const { method, headers } = req;
  const { authorization = "" } = headers;
  const [scheme, payload] = authorization.split(" ");

  if (scheme !== "Bearer" || payload !== "accessToken") {
    res.status(401).end("Unauthorized");
    return;
  }

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
