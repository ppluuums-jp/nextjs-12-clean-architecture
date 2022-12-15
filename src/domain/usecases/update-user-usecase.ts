import { Gender } from "../values/gender";
import { UseCase } from "./usecase";

export interface UpdateUserUseCase
  extends UseCase<Promise<void>, UpdateUserUseCaseParam> {}

export type UpdateUserUseCaseParam = {
  uuid: string;
  name: string;
  gender: Gender;
};
