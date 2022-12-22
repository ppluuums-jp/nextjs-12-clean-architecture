import { Result } from "../../core/result";
import { User } from "../entities/user";
import { UseCase } from "./usecase";

export interface ReadAllUsersUseCase
  extends UseCase<Promise<Result<User[], Error>>, ReadAllUsersUseCaseParam> {}

export type ReadAllUsersUseCaseParam = {};
