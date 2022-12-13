// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import firebaseAdmin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { FirestoreImpl } from "../../infrastructure/datastore/database/firestore/firestore-impl";
import { FSUser } from "../../infrastructure/datastore/database/firestore/model/user";

type Data = FSUser;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const COLLECTION_NAME = "user";
  if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      }),
    });
  }

  const db = getFirestore();
  let f = new FirestoreImpl({ db: db });
  const docRef = db.collection(COLLECTION_NAME).doc();
  const insertData = {
    uuid: "12345",
    name: "Yakuso",
    createdAt: new Date(),
  };
  let data: FSUser = await f.findUserById("crWGsTrdaqvSqsbAx7TF");
  // docRef.set(insertData);
  res.status(200);
  res.json(data);
}
