import { Gender } from "../values/gender";
import { UseCase } from "./usecase";

export interface CreateUserUseCase
  extends UseCase<Promise<void>, CreateUserUseCaseParam> {}

type CreateUserUseCaseParam = {
  name: string;
  gender: Gender;
};
