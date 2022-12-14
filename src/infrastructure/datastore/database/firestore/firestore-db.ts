import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";
import { FSUser } from "./model/user";

export interface FirestoreDB {
  findAllUsers(): Promise<FSUser[]>;
  findUserById(userId: string): Promise<FSUser>;

  insertUser(param: FSInsertUserParam): Promise<void>;

  updateUser(param: FSUpdateUserParam): Promise<void>;

  deleteUser(userId: string): Promise<void>;
}
