import { UseCase } from "./usecase";

export interface DeleteUserUseCase
  extends UseCase<Promise<void>, DeleteUserUseCaseParam> {}

type DeleteUserUseCaseParam = {
  uuid: string;
};
