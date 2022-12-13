import { User } from "../entities/user";
import { Gender } from "../values/gender";
import { UseCase } from "./usecase";

export interface IDeleteUserUseCase
  extends UseCase<void, DeleteUserUseCaseParam> {}

type DeleteUserUseCaseParam = {
  uuid: string;
};
