import { inject, injectable } from "inversify";
import { TYPES } from "../../di/types";
import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user-repository";
import { Gender } from "../../domain/values/gender";
import type { FirestoreDB } from "../datastore/database/firestore/firestore-db";
import { fsGenderConvertor } from "../datastore/database/firestore/model/gender";
import { fsUserConverter } from "../datastore/database/firestore/model/user";
import "reflect-metadata";

@injectable()
export class UserRepositoryImpl implements UserRepository {
  private readonly firestoreDB: FirestoreDB;
  constructor(@inject(TYPES.FirestoreDB) firestoreDB: FirestoreDB) {
    this.firestoreDB = firestoreDB;
  }
  async create(params: { name: string; gender: Gender }): Promise<void> {
    await this.firestoreDB.insertUser({
      name: params.name,
      gender: fsGenderConvertor.fromEntity(params.gender),
    });
  }

  async delete(param: { uuid: string }): Promise<void> {
    await this.firestoreDB.deleteUser(param.uuid);
  }

  async findAll(): Promise<User[]> {
    const users = await this.firestoreDB.findAllUsers();
    return users.map(fsUserConverter.toEntity);
  }

  async findById(params: { uuid: string }): Promise<User> {
    const result = await this.firestoreDB.findUserById(params.uuid);
    return fsUserConverter.toEntity(result);
  }

  async update(params: {
    uuid: string;
    name: string;
    gender: Gender;
  }): Promise<void> {
    await this.firestoreDB.updateUser({
      gender: fsGenderConvertor.fromEntity(params.gender),
      name: params.name,
      userId: params.uuid,
    });
  }
}
