import { User } from "../entities/user";
import { Gender } from "../values/gender";
import { UseCase } from "./usecase";

export interface ReadUserUseCase extends UseCase<User, ReadUserUseCaseParam> {}

type ReadUserUseCaseParam = {
  uuid: string;
};
