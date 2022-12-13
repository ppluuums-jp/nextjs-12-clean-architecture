import { firestore } from "firebase-admin";
import DocumentData = firestore.DocumentData;
import QueryDocumentSnapshot = firestore.QueryDocumentSnapshot;
import FirestoreDataConverter = firestore.FirestoreDataConverter;

export type FSUser = {
  id: string;
  name: string;
  gender: number; // 0:不明 1:男性 2:女性

  createdAt: Date;
  updatedAt: Date;
};

export const fsUserConverter: FirestoreDataConverter<FSUser> = {
  toFirestore(user: FSUser): DocumentData {
    return {
      id: user.id,
      name: user.name,
      gender: user.gender,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): FSUser {
    const data = snapshot.data()!;
    return {
      id: data.id,
      name: data.name,
      gender: data.gender,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  },
};
