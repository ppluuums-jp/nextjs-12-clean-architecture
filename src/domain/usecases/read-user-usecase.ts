import { User } from "../entities/user";
import { UseCase } from "./usecase";

export interface ReadUserUseCase
  extends UseCase<Promise<User>, ReadUserUseCaseParam> {}

type ReadUserUseCaseParam = {
  uuid: string;
};
