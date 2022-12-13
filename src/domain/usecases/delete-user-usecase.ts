import { User } from "../entities/user";
import { Gender } from "../values/gender";
import { UseCase } from "./usecase";

export interface DeleteUserUseCase
  extends UseCase<void, DeleteUserUseCaseParam> {}

type DeleteUserUseCaseParam = {
  uuid: string;
};
