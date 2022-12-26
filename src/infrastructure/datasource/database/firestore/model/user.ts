import { User } from "../../../../../domain/entities/user";
import { FSGender, fsGenderConvertor } from "./gender";

export type FSUser = {
  id: string;
  name: string;
  gender: FSGender; // 0:不明 1:男性 2:女性

  createdAt: Date;
  updatedAt: Date;
};

export const fsUserConverter = {
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
