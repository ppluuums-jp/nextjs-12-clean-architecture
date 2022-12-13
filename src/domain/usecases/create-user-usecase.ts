import { Gender } from "../values/gender";
import { UseCase } from "./usecase";

export interface ICreateUserUseCase
  extends UseCase<void, CreateUserUseCaseParam> {}

type CreateUserUseCaseParam = {
  name: string;
  gender: Gender;
};
