import { Firestore } from "./firestore";
import { FSUser } from "./model/user";
import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";

export class FirestoreImpl implements Firestore {
  deleteUser(userId: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  findUserById(userId: string): Promise<FSUser> {
    return Promise.resolve(undefined);
  }

  insertUser(param: FSInsertUserParam): Promise<void> {
    return Promise.resolve(undefined);
  }

  updateUser(param: FSUpdateUserParam): Promise<void> {
    return Promise.resolve(undefined);
  }
}
