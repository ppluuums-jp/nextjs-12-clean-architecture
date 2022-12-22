import { Result } from "../../core/result";
import { Gender } from "../values/gender";
import { UseCase } from "./usecase";

export interface CreateUserUseCase
  extends UseCase<Promise<Result<boolean, Error>>, CreateUserUseCaseParam> {}

export type CreateUserUseCaseParam = {
  name: string;
  gender: Gender;
};
