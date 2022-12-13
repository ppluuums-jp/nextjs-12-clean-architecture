import { User } from "../entities/user";
import { Gender } from "../values/gender";

export interface UserRepository {
  create(params: { name: string; gender: Gender }): Promise<void>;
  findById(params: { uuid: string }): Promise<User>;
  update(params: { uuid: string; name: string; gender: Gender }): Promise<void>;
  delete(param: { uuid: string }): Promise<void>;
}
