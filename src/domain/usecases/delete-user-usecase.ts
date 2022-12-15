import { UseCase } from "./usecase";

export interface DeleteUserUseCase
  extends UseCase<Promise<void>, DeleteUserUseCaseParam> {}

export type DeleteUserUseCaseParam = {
  uuid: string;
};
