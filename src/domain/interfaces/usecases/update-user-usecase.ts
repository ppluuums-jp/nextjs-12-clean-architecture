import { Result } from "../../../core/result";
import { Gender } from "../../values/gender";
import { UseCase } from "./usecase";

export interface UpdateUserUseCase
  extends UseCase<Promise<Result<boolean, Error>>, UpdateUserUseCaseParam> {}

export type UpdateUserUseCaseParam = {
  uuid: string;
  name: string;
  gender: Gender;
};
