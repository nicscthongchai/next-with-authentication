// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  const { method } = req;
  switch (method) {
    case "POST":
      res
        .status(200)
        .json({ accessToken: "accessToken", refreshToken: "refreshToken" });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
