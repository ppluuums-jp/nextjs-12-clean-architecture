import { UserRepository } from "../../domain/repositories/user-repository";
import {
  UpdateUserUseCase,
  UpdateUserUseCaseParam,
} from "../../domain/usecases/update-user-usecase";

export class UpdateUserUseCaseImpl implements UpdateUserUseCase {
  readonly userRepository: UserRepository;

  constructor(params: { userRepository: UserRepository }) {
    this.userRepository = params.userRepository;
  }

  async execute(param: UpdateUserUseCaseParam): Promise<void> {
    await this.userRepository.update({
      uuid: param.uuid,
      name: param.name,
      gender: param.gender,
    });
  }
}
