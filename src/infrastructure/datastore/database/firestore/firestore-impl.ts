import { Firestore } from "./firestore";
import { FSUser } from "./model/user";
import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";
import firebaseAdmin, { firestore } from "firebase-admin";

export class FirestoreImpl implements Firestore {
  private readonly db: FirebaseFirestore.Firestore;

  constructor(params: { db: FirebaseFirestore.Firestore }) {
    this.db = params.db;
  }

  private init(): void {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      }),
    });
  }
  deleteUser(userId: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  async findUserById(userId: string): Promise<FSUser> {
    let collection = this.db.collection("/user");
    let ss = await collection.where("id", "==", userId).get();
    if (ss.empty) {
      throw Error();
    }
    let docs = ss.docs;
    if (docs.length === 0) {
      throw Error();
    }
    if (docs.length >= 2) {
      throw Error();
    }
    let doc = docs[0].data();
    return {
      createdAt: doc["created_at"],
      gender: doc["gender"],
      id: doc["id"],
      name: doc["name"],
      updatedAt: doc["updated_at"],
    };
  }

  insertUser(param: FSInsertUserParam): Promise<void> {
    return Promise.resolve(undefined);
  }

  updateUser(param: FSUpdateUserParam): Promise<void> {
    return Promise.resolve(undefined);
  }
}
