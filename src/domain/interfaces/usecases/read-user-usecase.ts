import { Result } from "../../../core/result";
import { User } from "../../entities/user";
import { UseCase } from "./usecase";

export interface ReadUserUseCase
  extends UseCase<Promise<Result<User, Error>>, ReadUserUseCaseParam> {}

export type ReadUserUseCaseParam = {
  uuid: string;
};
