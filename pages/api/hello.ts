import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("yo");
  res.status(200).json({ name: "John Doe" });
};
