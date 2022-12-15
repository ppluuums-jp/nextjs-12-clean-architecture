import { UserRepository } from "../../domain/repositories/user-repository";
import {
  CreateUserUseCase,
  CreateUserUseCaseParam,
} from "../../domain/usecases/create-user-usecase";

export class CreateUserUseCaseImpl implements CreateUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(params: { userRepository: UserRepository }) {
    this.userRepository = params.userRepository;
  }

  async execute(param: CreateUserUseCaseParam): Promise<void> {
    await this.userRepository.create({
      name: param.name,
      gender: param.gender,
    });
  }
}
