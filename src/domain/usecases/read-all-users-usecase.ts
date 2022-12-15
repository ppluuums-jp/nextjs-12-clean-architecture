import { User } from "../entities/user";
import { UseCase } from "./usecase";

export interface ReadAllUsersUseCase
  extends UseCase<Promise<User[]>, ReadAllUsersUseCaseParam> {}

export type ReadAllUsersUseCaseParam = {};
