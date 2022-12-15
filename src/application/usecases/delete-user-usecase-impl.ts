import { inject, injectable } from "inversify";
import "reflect-metadata";
import { TYPES } from "../../di/types";
import type { UserRepository } from "../../domain/repositories/user-repository";
import {
  DeleteUserUseCase,
  DeleteUserUseCaseParam,
} from "../../domain/usecases/delete-user-usecase";

@injectable()
export class DeleteUserUseCaseImpl implements DeleteUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(param: DeleteUserUseCaseParam): Promise<void> {
    await this.userRepository.delete({ uuid: param.uuid });
  }
}
