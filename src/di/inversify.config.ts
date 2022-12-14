import firebaseAdmin from "firebase-admin";
import { Container } from "inversify";
import { UserRepository } from "../domain/repositories/user-repository";
import { FirestoreDB } from "../infrastructure/datastore/database/firestore/firestore-db";
import { FirestoreDBImpl } from "../infrastructure/datastore/database/firestore/firestore-db-impl";
import { UserRepositoryImpl } from "../infrastructure/repositories/user-repository-impl";
import { TYPES } from "./types";

export const container = new Container();

container.bind<FirestoreDB>(TYPES.FirestoreDB).toConstantValue(
  new FirestoreDBImpl({
    options: {
      credential: firebaseAdmin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      }),
    },
  })
);
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImpl);
