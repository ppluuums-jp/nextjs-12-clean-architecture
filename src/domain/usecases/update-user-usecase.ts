import { Gender } from "../values/gender";
import { UseCase } from "./usecase";

export interface UpdateUserUseCase
  extends UseCase<void, UpdateUserUseCaseParam> {}

type UpdateUserUseCaseParam = {
  uuid: string;
  name: string;
  gender: Gender;
};
