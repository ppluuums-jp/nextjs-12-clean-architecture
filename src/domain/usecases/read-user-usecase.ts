import { User } from "../entities/user";
import { UseCase } from "./usecase";

export interface ReadUserUseCase
  extends UseCase<Promise<User>, ReadUserUseCaseParam> {}

export type ReadUserUseCaseParam = {
  uuid: string;
};
