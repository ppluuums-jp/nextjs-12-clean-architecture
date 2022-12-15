export const TYPES = {
  // database
  FirestoreDB: Symbol("Firestore"),

  // repository
  UserRepository: Symbol("UserRepository"),

  // usecase
  CreateUserUseCase: Symbol('CreateUserUseCase'),
  DeleteUserUseCase: Symbol('DeleteUserUseCase'),
  ReadAllUsersUseCase: Symbol('ReadAllUsersUseCase'),
  ReadUserUseCase: Symbol('ReadUserUseCase'),
  UpdateUserUseCase: Symbol('UpdateUserUseCase'),
};
