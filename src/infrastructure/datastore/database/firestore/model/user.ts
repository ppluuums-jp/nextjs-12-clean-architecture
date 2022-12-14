import { firestore } from "firebase-admin";
import { FSGender, fsGenderConvertor } from "./gender";
import { User } from "../../../../../domain/entities/user";
import DocumentData = firestore.DocumentData;
import QueryDocumentSnapshot = firestore.QueryDocumentSnapshot;
import FirestoreDataConverter = firestore.FirestoreDataConverter;

export type FSUser = {
  id: string;
  name: string;
  gender: FSGender; // 0:不明 1:男性 2:女性

  createdAt: Date;
  updatedAt: Date;
};

export const fsUserConverter = {
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
  toEntity(user: FSUser): User {
    return {
      createdAt: user.createdAt,
      gender: fsGenderConvertor.toEntity(user.gender),
      uuid: user.id,
      name: user.name,
      updatedAt: user.updatedAt,
    };
  },
  fromEntity(user: User): FSUser {
    return {
      createdAt: user.createdAt,
      gender: fsGenderConvertor.fromEntity(user.gender),
      id: user.uuid,
      name: user.name,
      updatedAt: user.updatedAt,
    };
  },
};
