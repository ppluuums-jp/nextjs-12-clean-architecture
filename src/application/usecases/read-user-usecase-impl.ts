import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user-repository";
import {
  ReadUserUseCase,
  ReadUserUseCaseParam,
} from "../../domain/usecases/read-user-usecase";

export class ReadUserUseCaseImpl implements ReadUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(params: { userRepository: UserRepository }) {
    this.userRepository = params.userRepository;
  }

  async execute(param: ReadUserUseCaseParam): Promise<User> {
    return await this.userRepository.findById({ uuid: param.uuid });
  }
}
