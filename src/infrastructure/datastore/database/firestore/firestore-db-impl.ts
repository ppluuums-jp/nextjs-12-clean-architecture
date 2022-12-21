import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { injectable } from "inversify";
import "reflect-metadata";
import { NotFoundError } from "../../../../core/error/not-found-error";
import { FirestoreDB } from "./firestore-db";
import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";
import { FSUser } from "./model/user";

@injectable()
export class FirestoreDBImpl implements FirestoreDB {
  private readonly db: firebase.firestore.Firestore;

  constructor(params: { options: Object }) {
    if (!firebase.apps.length) {
      firebase.initializeApp(params.options);
    }
    this.db = firebase.firestore();
  }

  async deleteUser(userId: string): Promise<void> {
    const collection = await this.db.collection(FSCollectionPath.user);
    const doc = await collection.doc(userId);
    await doc.delete();
  }

  async findUserById(userId: string): Promise<FSUser> {
    const collection = await this.db.collection(FSCollectionPath.user);
    const doc = await collection.doc(userId);
    const ss = await doc.get();
    const data = ss.data();
    if (data == null) {
      throw new NotFoundError();
    }
    const res: FSUser = {
      createdAt: data["createdAt"],
      gender: data["gender"],
      id: data["id"],
      name: data["name"],
      updatedAt: data["updatedAt"],
    };
    return res;
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
    await doc.update(user);
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
    const collection = await this.db.collection(FSCollectionPath.user);
    const ss = await collection.get();
    return ss.docs.map((v) => {
      const data = v.data();
      return {
        createdAt: data["createdAt"],
        gender: data["gender"],
        id: data["id"],
        name: data["name"],
        updatedAt: data["updatedAt"],
      };
    });
  }
}

enum FSCollectionPath {
  user = "user",
}
