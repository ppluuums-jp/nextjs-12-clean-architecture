import { inject, injectable } from "inversify";
import "reflect-metadata";
import { InternalError } from "../../core/error/internal-error";
import { Failure, Result, Success } from "../../core/result";
import { TYPES } from "../../di/types";
import type { UserRepository } from "../../domain/repositories/user-repository";
import {
  CreateUserUseCase,
  CreateUserUseCaseParam,
} from "../../domain/usecases/create-user-usecase";

@injectable()
export class CreateUserUseCaseImpl implements CreateUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(
    param: CreateUserUseCaseParam
  ): Promise<Result<boolean, Error>> {
    const result = await this.userRepository.create({
      name: param.name,
      gender: param.gender,
    });
    if (result.isSuccess()) {
      return new Success(true);
    } else {
      return new Failure(new InternalError());
    }
  }
}
