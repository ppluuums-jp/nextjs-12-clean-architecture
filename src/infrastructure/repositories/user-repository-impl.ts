import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Failure, Result, Success } from "../../core/result";
import { TYPES } from "../../di/types";
import { User } from "../../domain/entities/user";
import type { FirestoreDB } from "../../domain/interfaces/datasource/firestore-db";
import { UserRepository } from "../../domain/interfaces/repositories/user-repository";
import { Gender } from "../../domain/values/gender";
import { fsGenderConvertor } from "../datasource/database/firestore/model/gender";
import { fsUserConverter } from "../datasource/database/firestore/model/user";

@injectable()
export class UserRepositoryImpl implements UserRepository {
  private readonly firestoreDB: FirestoreDB;

  constructor(@inject(TYPES.FirestoreDB) firestoreDB: FirestoreDB) {
    this.firestoreDB = firestoreDB;
  }

  async create(params: {
    name: string;
    gender: Gender;
  }): Promise<Result<boolean, Error>> {
    const result = await this.firestoreDB.insertUser({
      name: params.name,
      gender: fsGenderConvertor.fromEntity(params.gender),
    });
    if (result.isSuccess()) {
      return new Success(true);
    } else {
      return new Failure(result.error);
    }
  }

  async delete(param: { uuid: string }): Promise<Result<boolean, Error>> {
    const result = await this.firestoreDB.deleteUser(param.uuid);
    if (result.isSuccess()) {
      return new Success(true);
    } else {
      return new Failure(result.error);
    }
  }

  async findAll(): Promise<Result<User[], Error>> {
    const result = await this.firestoreDB.findAllUsers();
    if (result.isSuccess()) {
      const users = result.value;
      return new Success(users.map(fsUserConverter.toEntity));
    } else {
      return new Failure(result.error);
    }
  }

  async findById(params: { uuid: string }): Promise<Result<User, Error>> {
    const result = await this.firestoreDB.findUserById(params.uuid);
    if (result.isSuccess()) {
      return new Success(fsUserConverter.toEntity(result.value));
    } else {
      return new Failure(result.error);
    }
  }

  async update(params: {
    uuid: string;
    name: string;
    gender: Gender;
  }): Promise<Result<boolean, Error>> {
    const result = await this.firestoreDB.updateUser({
      gender: fsGenderConvertor.fromEntity(params.gender),
      name: params.name,
      userId: params.uuid,
    });
    if (result.isSuccess()) {
      return new Success(true);
    } else {
      return new Failure(result.error);
    }
  }
}
