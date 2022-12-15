import { UserRepository } from "../../domain/repositories/user-repository";
import {
  DeleteUserUseCase,
  DeleteUserUseCaseParam,
} from "../../domain/usecases/delete-user-usecase";

export class DeleteUserUseCaseImpl implements DeleteUserUseCase {
  readonly userRepository: UserRepository;

  constructor(params: { userRepository: UserRepository }) {
    this.userRepository = params.userRepository;
  }

  async execute(param: DeleteUserUseCaseParam): Promise<void> {
    await this.userRepository.delete({ uuid: param.uuid });
  }
}
