import { User } from "../entities/user";
import { Gender } from "../values/gender";
import { UseCase } from "./usecase";

export interface IReadUserUseCase extends UseCase<User, ReadUserUseCaseParam> {}

type ReadUserUseCaseParam = {
  uuid: string;
};
