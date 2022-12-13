// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import firebaseAdmin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  uuid: string;
  name: string;
  createdAt: Date;
};

export default function handler(
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
  if (req.method === "POST") {
    const docRef = db.collection(COLLECTION_NAME).doc();
    const insertData = {
      uuid: "12345",
      name: "Yakuso",
      createdAt: new Date(),
    };
    docRef.set(insertData);
  }
  res.status(200);
}
