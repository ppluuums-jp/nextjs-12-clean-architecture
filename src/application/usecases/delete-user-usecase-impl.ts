import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Failure, Result, Success } from "../../core/result";
import { TYPES } from "../../di/types";
import type { UserRepository } from "../../domain/interfaces/repositories/user-repository";
import {
  DeleteUserUseCase,
  DeleteUserUseCaseParam,
} from "../../domain/interfaces/usecases/delete-user-usecase";

@injectable()
export class DeleteUserUseCaseImpl implements DeleteUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(
    param: DeleteUserUseCaseParam
  ): Promise<Result<boolean, Error>> {
    const result = await this.userRepository.delete({ uuid: param.uuid });
    if (result.isSuccess()) {
      return new Success(true);
    } else {
      return new Failure(result.error);
    }
  }
}
