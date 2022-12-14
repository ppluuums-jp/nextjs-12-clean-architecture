import firebaseAdmin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { Container } from "inversify";
import { FirestoreDB } from "../infrastructure/datastore/database/firestore/firestore-db";
import { FirestoreDBImpl } from "../infrastructure/datastore/database/firestore/firestore-db-impl";
import { TYPES } from "./types";

export const container = new Container();

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
container
  .bind<FirestoreDB>(TYPES.FirestoreDB)
  .toConstantValue(new FirestoreDBImpl({ db: db }));
