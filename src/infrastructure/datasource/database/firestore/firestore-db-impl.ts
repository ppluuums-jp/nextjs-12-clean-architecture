import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import * as firestore from "firebase/firestore";
import { injectable } from "inversify";
import "reflect-metadata";
import { InternalError } from "../../../../core/error/internal-error";
import { NetworkError } from "../../../../core/error/network-error";
import { NotFoundError } from "../../../../core/error/not-found-error";
import { Failure, Result, Success } from "../../../../core/result";
import { FirestoreDB } from "../../../../domain/interfaces/datasource/firestore-db";
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

  async deleteUser(
    userId: string
  ): Promise<Result<boolean, NotFoundError | InternalError | NetworkError>> {
    try {
      const collection = firestore.collection(this.db, FSCollectionPath.user);
      const q = firestore.query(
        collection,
        firestore.where("id", "==", userId)
      );
      const qss = await firestore.getDocs(q);
      if (qss.empty) {
        return new Failure(new NotFoundError());
      }
      const path = firestore.doc(
        this.db,
        FSCollectionPath.user,
        qss.docs[0].id
      );
      await firestore.deleteDoc(path);
      return new Success(true);
    } catch (e) {
      return new Failure(new InternalError());
    }
  }

  async findAllUsers(): Promise<
    Result<FSUser[], InternalError | NetworkError>
  > {
    try {
      const collection = firestore.collection(this.db, FSCollectionPath.user);
      const q = firestore.query(collection);
      const qss = await firestore.getDocs(q);
      const users = qss.docs.map((v) => v.data() as FSUser);
      return new Success(users);
    } catch (e) {
      return new Failure(new InternalError());
    }
  }

  async findUserById(
    userId: string
  ): Promise<Result<FSUser, NotFoundError | InternalError | NetworkError>> {
    try {
      const collection = firestore.collection(this.db, FSCollectionPath.user);
      const q = firestore.query(
        collection,
        firestore.where("id", "==", userId)
      );
      const qss = await firestore.getDocs(q);
      if (qss.empty) {
        return new Failure(new NotFoundError());
      }
      const doc = qss.docs[0];
      return new Success(doc.data() as FSUser);
    } catch (e) {
      return new Failure(new InternalError());
    }
  }

  async insertUser(
    param: FSInsertUserParam
  ): Promise<Result<boolean, InternalError | NetworkError>> {
    try {
      const collection = firestore.collection(this.db, FSCollectionPath.user);
      const doc = firestore.doc(collection);
      const date = new Date();
      const user: FSUser = {
        createdAt: date,
        gender: param.gender,
        id: doc.id,
        name: param.name,
        updatedAt: date,
      };
      await firestore.setDoc(doc, user);
      return new Success(true);
    } catch (e) {
      return new Failure(new InternalError());
    }
  }

  async updateUser(
    param: FSUpdateUserParam
  ): Promise<Result<boolean, NotFoundError | InternalError | NetworkError>> {
    try {
      const collection = firestore.collection(this.db, FSCollectionPath.user);
      const q = firestore.query(
        collection,
        firestore.where("id", "==", param.userId)
      );
      const qss = await firestore.getDocs(q);
      if (qss.empty) {
        return new Failure(new NotFoundError());
      }
      const oldUser = qss.docs[0].data() as FSUser;
      const updatedAt = new Date();
      const user: FSUser = {
        createdAt: oldUser.createdAt,
        gender: param.gender ?? oldUser.gender,
        id: param.userId,
        name: param.name ?? oldUser.name,
        updatedAt: updatedAt,
      };
      const doc = firestore.doc(this.db, FSCollectionPath.user, oldUser.id);
      await firestore.updateDoc(doc, user);
      return new Success(true);
    } catch (e) {
      return new Failure(new InternalError());
    }
  }
}

enum FSCollectionPath {
  user = "user",
}
