import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user-repository";
import {
  ReadAllUsersUseCase,
  ReadAllUsersUseCaseParam,
} from "../../domain/usecases/read-all-users-usecase";

export class ReadAllUsersUseCaseImpl implements ReadAllUsersUseCase {
  private readonly userRepository: UserRepository;

  constructor({ userRepository }: { userRepository: UserRepository }) {
    this.userRepository = userRepository;
  }

  async execute(param: ReadAllUsersUseCaseParam): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
