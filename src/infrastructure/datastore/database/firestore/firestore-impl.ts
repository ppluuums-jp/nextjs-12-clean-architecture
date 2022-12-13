import firebaseAdmin, { firestore } from "firebase-admin";
import { Firestore } from "./firestore";
import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";
import { FSUser } from "./model/user";
import WhereFilterOp = firestore.WhereFilterOp;

export class FirestoreImpl implements Firestore {
  private readonly db: FirebaseFirestore.Firestore;

  constructor(params: { db: FirebaseFirestore.Firestore }) {
    this.db = params.db;
  }

  async deleteUser(userId: string): Promise<void> {
    let collection = await this.db.collection("user");
    let doc = await collection.doc(userId);
    await doc.delete();
  }

  async findUserById(userId: string): Promise<FSUser> {
    let collection = await this.db.collection("user");
    let doc = await collection.doc(userId);
    let ss = await doc.get();
    let data = ss.data();
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

  async insertUser(param: FSInsertUserParam): Promise<void> {
    let collection = await this.db.collection("user");
    let doc = await collection.doc();
    let id = doc.id;
    let date = new Date();
    let user: FSUser = {
      createdAt: date,
      gender: param.gender,
      id: id,
      name: param.name,
      updatedAt: date,
    };
    await collection.add(user);
  }

  updateUser(param: FSUpdateUserParam): Promise<void> {
    return Promise.resolve(undefined);
  }
}
