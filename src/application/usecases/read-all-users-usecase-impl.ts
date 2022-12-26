import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Failure, Result, Success } from "../../core/result";
import { TYPES } from "../../di/types";
import { User } from "../../domain/entities/user";
import type { UserRepository } from "../../domain/interfaces/repositories/user-repository";
import {
  ReadAllUsersUseCase,
  ReadAllUsersUseCaseParam,
} from "../../domain/interfaces/usecases/read-all-users-usecase";

@injectable()
export class ReadAllUsersUseCaseImpl implements ReadAllUsersUseCase {
  private readonly userRepository: UserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(
    param: ReadAllUsersUseCaseParam
  ): Promise<Result<User[], Error>> {
    const result = await this.userRepository.findAll();
    if (result.isSuccess()) {
      return new Success(result.value);
    } else {
      return new Failure(result.error);
    }
  }
}
