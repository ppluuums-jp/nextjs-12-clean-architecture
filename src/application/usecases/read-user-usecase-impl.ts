import { inject, injectable } from "inversify";
import "reflect-metadata";
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

  async execute(param: ReadUserUseCaseParam): Promise<User> {
    return await this.userRepository.findById({ uuid: param.uuid });
  }
}
