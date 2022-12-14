import { UserRepository } from "../../domain/repositories/user-repository";
import { ReadUserUseCase } from "../../domain/usecases/read-user-usecase";

export class ReadUserUseCaseImpl implements ReadUserUseCase {
  readonly userRepository: UserRepository;
  constructor(params: { userRepository: UserRepository }) {
    this.userRepository = params.userRepository;
  }
  execute(params: { uuid: string }) {
    this.userRepository.findById(params);
    this.userRepository.findAll();
  }
}
