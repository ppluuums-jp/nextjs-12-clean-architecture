import { Result } from "../../core/result";
import { User } from "../entities/user";
import { Gender } from "../values/gender";

export interface UserRepository {
  create(params: {
    name: string;
    gender: Gender;
  }): Promise<Result<boolean, Error>>;

  findById(params: { uuid: string }): Promise<Result<User, Error>>;

  findAll(): Promise<Result<User[], Error>>;

  update(params: {
    uuid: string;
    name: string;
    gender: Gender;
  }): Promise<Result<boolean, Error>>;

  delete(param: { uuid: string }): Promise<Result<boolean, Error>>;
}
