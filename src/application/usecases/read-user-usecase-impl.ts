import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Failure, Result, Success } from "../../core/result";
import { TYPES } from "../../di/types";
import { User } from "../../domain/entities/user";
import type { UserRepository } from "../../domain/repositories/user-repository";
import {
  ReadUserUseCase,
  ReadUserUseCaseParam,
} from "../../domain/usecases/read-user-usecase";

@injectable()
export class ReadUserUseCaseImpl implements ReadUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(param: ReadUserUseCaseParam): Promise<Result<User, Error>> {
    const result = await this.userRepository.findById({ uuid: param.uuid });
    if (result.isSuccess()) {
      return new Success(result.value);
    } else {
      return new Failure(result.error);
    }
  }
}
