import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import * as firestore from "firebase/firestore";
import { injectable } from "inversify";
import "reflect-metadata";
import { NotFoundError } from "../../../../core/error/not-found-error";
import { FirestoreDB } from "./firestore-db";
import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";
import { FSUser } from "./model/user";

@injectable()
export class FirestoreDBImpl implements FirestoreDB {
  private readonly db: firestore.Firestore;

  constructor(params: { options: Object }) {
    if (!firebase.apps.length) {
      initializeApp(params.options);
    }
    this.db = firestore.getFirestore();
  }

  async deleteUser(userId: string): Promise<void> {
    const collection = firestore.collection(this.db, FSCollectionPath.user);
    const q = firestore.query(collection, firestore.where("id", "==", userId));
    const qss = await firestore.getDocs(q);
    if (qss.empty) {
      throw new NotFoundError();
    }
    const path = firestore.doc(this.db, FSCollectionPath.user, qss.docs[0].id);
    await firestore.deleteDoc(path);
  }

  async findUserById(userId: string): Promise<FSUser> {
    const collection = firestore.collection(this.db, FSCollectionPath.user);
    const q = firestore.query(collection, firestore.where("id", "==", userId));
    const qss = await firestore.getDocs(q);
    if (qss.empty) {
      throw new NotFoundError();
    }
    const doc = qss.docs[0];
    return doc.data() as FSUser;
  }

  async insertUser(param: FSInsertUserParam): Promise<void> {
    const id = firestore.doc(this.db, FSCollectionPath.user).id;
    const doc = firestore.doc(this.db, FSCollectionPath.user, id);
    const date = new Date();
    const user: FSUser = {
      createdAt: date,
      gender: param.gender,
      id: id,
      name: param.name,
      updatedAt: date,
    };
    await firestore.setDoc(doc, user);
  }

  async updateUser(param: FSUpdateUserParam): Promise<void> {
    const collection = firestore.collection(this.db, FSCollectionPath.user);
    const q = firestore.query(
      collection,
      firestore.where("id", "==", param.userId)
    );
    const qss = await firestore.getDocs(q);
    if (qss.empty) {
      throw new NotFoundError();
    }
    const oldUser = await this.findUserById(param.userId);
    const updatedAt = new Date();
    const user: FSUser = {
      createdAt: oldUser.createdAt,
      gender: param.gender ?? oldUser.gender,
      id: param.userId,
      name: param.name ?? oldUser.name,
      updatedAt: updatedAt,
    };
    const doc = firestore.doc(this.db, FSCollectionPath.user, qss.docs[0].id);
    await firestore.updateDoc(doc, user);
  }

  async findAllUsers(): Promise<FSUser[]> {
    const collection = firestore.collection(this.db, FSCollectionPath.user);
    const q = firestore.query(collection);
    const qss = await firestore.getDocs(q);
    return qss.docs.map((v) => v.data() as FSUser);
  }
}

enum FSCollectionPath {
  user = "user",
}
