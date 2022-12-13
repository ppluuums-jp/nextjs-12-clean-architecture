import { UserRepository } from "../../domain/repositories/user-repository";
import { UpdateUserUseCase } from "../../domain/usecases/update-user-usecase";
import { Gender } from "../../domain/values/gender";

export class UpdateUserUseCaseImpl implements UpdateUserUseCase {
  readonly userRepository: UserRepository;
  constructor(params: { userRepository: UserRepository }) {
    this.userRepository = params.userRepository;
  }
  execute(params: { uuid: string; name: string; gender: Gender }) {
    this.userRepository.update(params);
  }
}
