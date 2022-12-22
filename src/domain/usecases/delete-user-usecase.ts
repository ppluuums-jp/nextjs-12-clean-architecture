import { Result } from "../../core/result";
import { UseCase } from "./usecase";

export interface DeleteUserUseCase
  extends UseCase<Promise<Result<boolean, Error>>, DeleteUserUseCaseParam> {}

export type DeleteUserUseCaseParam = {
  uuid: string;
};
