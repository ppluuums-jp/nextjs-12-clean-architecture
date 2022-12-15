import { inject, injectable } from "inversify";
import "reflect-metadata";
import { TYPES } from "../../di/types";
import { User } from "../../domain/entities/user";
import type { UserRepository } from "../../domain/repositories/user-repository";
import {
  ReadAllUsersUseCase,
  ReadAllUsersUseCaseParam,
} from "../../domain/usecases/read-all-users-usecase";

@injectable()
export class ReadAllUsersUseCaseImpl implements ReadAllUsersUseCase {
  private readonly userRepository: UserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(param: ReadAllUsersUseCaseParam): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
