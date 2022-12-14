// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "../../di/inversify.config";
import { TYPES } from "../../di/types";
import { FirestoreDB } from "../../infrastructure/datastore/database/firestore/firestore-db";
import { FSUser } from "../../infrastructure/datastore/database/firestore/model/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FSUser>
) {
  const firestore: FirestoreDB = container.get(TYPES.FirestoreDB);
  const user = await firestore.findUserById("crWGsTrdaqvSqsbAx7TF");
  res.json(user);
  res.status(200);
}
