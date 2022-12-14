import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Failure, Result, Success } from "../../core/result";
import { TYPES } from "../../di/types";
import type { UserRepository } from "../../domain/repositories/user-repository";
import {
  UpdateUserUseCase,
  UpdateUserUseCaseParam,
} from "../../domain/usecases/update-user-usecase";

@injectable()
export class UpdateUserUseCaseImpl implements UpdateUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(
    param: UpdateUserUseCaseParam
  ): Promise<Result<boolean, Error>> {
    const result = await this.userRepository.update({
      uuid: param.uuid,
      name: param.name,
      gender: param.gender,
    });
    if (result.isSuccess()) {
      return new Success(true);
    } else {
      return new Failure(result.error);
    }
  }
}
