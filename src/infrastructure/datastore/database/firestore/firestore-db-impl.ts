import firebaseAdmin, { AppOptions, firestore } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { injectable } from "inversify";
import { FirestoreDB } from "./firestore-db";
import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";
import { FSUser, fsUserConverter } from "./model/user";
import "reflect-metadata";

@injectable()
export class FirestoreDBImpl implements FirestoreDB {
  private readonly db: FirebaseFirestore.Firestore;

  constructor(params: { options: AppOptions }) {
    if (!firebaseAdmin.apps.length) {
      firebaseAdmin.initializeApp(params.options);
    }
    this.db = getFirestore();
  }

  async deleteUser(userId: string): Promise<void> {
    const collection = await this.db.collection(FSCollectionPath.user);
    const doc = await collection.doc(userId);
    await doc.delete();
  }

  async findUserById(userId: string): Promise<FSUser> {
    const collection = await this.db.collection(FSCollectionPath.user);
    const doc = await collection.doc(userId);
    const ss = await doc.withConverter(fsUserConverter).get();
    const data = ss.data();
    if (!ss.exists) {
      throw Error();
    }
    if (data == null) {
      throw Error();
    }
    return data;
  }

  async insertUser(param: FSInsertUserParam): Promise<void> {
    const collection = await this.db.collection(FSCollectionPath.user);
    const doc = await collection.doc();
    const id = doc.id;
    const date = new Date();
    const user: FSUser = {
      createdAt: date,
      gender: param.gender,
      id: id,
      name: param.name,
      updatedAt: date,
    };
    await doc.create(user);
  }

  async updateUser(param: FSUpdateUserParam): Promise<void> {
    const oldUser = await this.findUserById(param.userId);
    const updatedAt = new Date();
    const user: FSUser = {
      createdAt: oldUser.createdAt,
      gender: param.gender ?? oldUser.gender,
      id: param.userId,
      name: param.name ?? oldUser.name,
      updatedAt: updatedAt,
    };
    const collection = await this.db.collection(FSCollectionPath.user);
    const doc = await collection.doc(param.userId);
    await doc.update(user);
  }

  async findAllUsers(): Promise<FSUser[]> {
    const collection = await this.db
      .collection(FSCollectionPath.user)
      .withConverter(fsUserConverter);
    const ss = await collection.get();
    return ss.docs.map((v) => v.data());
  }
}

enum FSCollectionPath {
  user = "user",
}
