import { UserRepository } from "../../domain/repositories/user-repository";
import { DeleteUserUseCase } from "../../domain/usecases/delete-user-usecase";

export class DeleteUserUseCaseImpl implements DeleteUserUseCase {
  readonly userRepository: UserRepository;
  constructor(params: { userRepository: UserRepository }) {
    this.userRepository = params.userRepository;
  }
  execute(params: { uuid: string }) {
    this.userRepository.delete(params);
  }
}
