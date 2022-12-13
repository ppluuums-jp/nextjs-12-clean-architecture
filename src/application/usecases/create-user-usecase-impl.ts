import { UserRepository } from "../../domain/repositories/user-repository";
import { CreateUserUseCase } from "../../domain/usecases/create-user-usecase";
import { Gender } from "../../domain/values/gender";

export class CreateUserUseCaseImpl implements CreateUserUseCase {
  readonly userRepository: UserRepository;
  constructor(params: { userRepository: UserRepository }) {
    this.userRepository = params.userRepository;
  }
  execute(params: { name: string; gender: Gender }) {
    this.userRepository.create(params);
  }
}
