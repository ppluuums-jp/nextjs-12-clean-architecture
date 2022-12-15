import { inject, injectable } from "inversify";
import "reflect-metadata";
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

  async execute(param: CreateUserUseCaseParam): Promise<void> {
    await this.userRepository.create({
      name: param.name,
      gender: param.gender,
    });
  }
}
