import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore";
import { injectable } from "inversify";
import "reflect-metadata";
import { FirestoreDB } from "./firestore-db";
import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";
import { FSUser } from "./model/user";

@injectable()
export class FirestoreDBImpl implements FirestoreDB {
  private readonly db: firestore.Firestore;

  constructor(params: { options: Object }) {
    const app = initializeApp(params.options);
    this.db = firestore.getFirestore(app);
  }

  async deleteUser(userId: string): Promise<void> {
    const path = firestore.doc(this.db, FSCollectionPath.user, userId);
    await firestore.deleteDoc(path);
  }

  async findUserById(userId: string): Promise<FSUser> {
    // const collection = await this.db.collection(FSCollectionPath.user);
    // const doc = await collection.doc(userId);
    // const ss = await doc.get();
    // const data = ss.data();
    // if (data == null) {
    //   throw new NotFoundError();
    // }
    // const res: FSUser = {
    //   createdAt: data["createdAt"],
    //   gender: data["gender"],
    //   id: data["id"],
    //   name: data["name"],
    //   updatedAt: data["updatedAt"],
    // };
    // return res;
    return {
      id: "",
      name: "",
      gender: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async insertUser(param: FSInsertUserParam): Promise<void> {
    // const collection = await this.db.collection(FSCollectionPath.user);
    // const doc = await collection.doc();
    // const id = doc.id;
    // const date = new Date();
    // const user: FSUser = {
    //   createdAt: date,
    //   gender: param.gender,
    //   id: id,
    //   name: param.name,
    //   updatedAt: date,
    // };
    // await doc.update(user);
  }

  async updateUser(param: FSUpdateUserParam): Promise<void> {
    // const oldUser = await this.findUserById(param.userId);
    // const updatedAt = new Date();
    // const user: FSUser = {
    //   createdAt: oldUser.createdAt,
    //   gender: param.gender ?? oldUser.gender,
    //   id: param.userId,
    //   name: param.name ?? oldUser.name,
    //   updatedAt: updatedAt,
    // };
    // const collection = await this.db.collection(FSCollectionPath.user);
    // const doc = await collection.doc(param.userId);
    // await doc.update(user);
  }

  async findAllUsers(): Promise<FSUser[]> {
    // const c = collection(this.db, FSCollectionPath.user);
    // const ss = await collection.get();
    // return ss.docs.map((v) => {
    //   const data = v.data();
    //   return {
    //     createdAt: data["createdAt"],
    //     gender: data["gender"],
    //     id: data["id"],
    //     name: data["name"],
    //     updatedAt: data["updatedAt"],
    //   };
    // });

    const q = firestore.query(
      firestore.collection(this.db, FSCollectionPath.user)
    );
    const qss = await firestore.getDocs(q);
    return qss.docs.map((v) => {
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
