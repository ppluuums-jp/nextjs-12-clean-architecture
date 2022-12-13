import { Gender } from "../values/gender";
import { UseCase } from "./usecase";

export interface CreateUserUseCase
  extends UseCase<void, CreateUserUseCaseParam> {}

type CreateUserUseCaseParam = {
  name: string;
  gender: Gender;
};
