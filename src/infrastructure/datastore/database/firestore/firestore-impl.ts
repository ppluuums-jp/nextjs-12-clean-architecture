import { Firestore } from "./firestore";
import { FSUser } from "./model/user";
import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";
import firebaseAdmin, { firestore } from "firebase-admin";
import WhereFilterOp = firestore.WhereFilterOp;

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
    let collection = await this.db.collection("user");
    let docs = await collection.doc(userId).get();
    let data = docs.data();
    if (data == null) {
      throw Error();
    }
    return {
      createdAt: data["created_at"],
      gender: data["gender"],
      id: data["id"],
      name: data["name"],
      updatedAt: data["updated_at"],
    };
  }

  insertUser(param: FSInsertUserParam): Promise<void> {
    return Promise.resolve(undefined);
  }

  updateUser(param: FSUpdateUserParam): Promise<void> {
    return Promise.resolve(undefined);
  }
}
