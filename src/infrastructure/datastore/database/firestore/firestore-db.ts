import { InternalError } from "../../../../core/error/internal-error";
import { NetworkError } from "../../../../core/error/network-error";
import { NotFoundError } from "../../../../core/error/not-found-error";
import { Result } from "../../../../core/result";
import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";
import { FSUser } from "./model/user";

export interface FirestoreDB {
  findAllUsers(): Promise<Result<FSUser[], InternalError | NetworkError>>;

  findUserById(
    userId: string
  ): Promise<Result<FSUser, NotFoundError | InternalError | NetworkError>>;

  insertUser(
    param: FSInsertUserParam
  ): Promise<Result<boolean, InternalError | NetworkError>>;

  updateUser(
    param: FSUpdateUserParam
  ): Promise<Result<boolean, NotFoundError | InternalError | NetworkError>>;

  deleteUser(
    userId: string
  ): Promise<Result<boolean, NotFoundError | InternalError | NetworkError>>;
}
