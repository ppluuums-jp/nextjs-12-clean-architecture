import { Container } from "inversify";
import { CreateUserUseCaseImpl } from "../application/usecases/create-user-usecase-impl";
import { DeleteUserUseCaseImpl } from "../application/usecases/delete-user-usecase-impl";
import { ReadAllUsersUseCaseImpl } from "../application/usecases/read-all-users-usecase-impl";
import { ReadUserUseCaseImpl } from "../application/usecases/read-user-usecase-impl";
import { UpdateUserUseCaseImpl } from "../application/usecases/update-user-usecase-impl";
import { UserRepository } from "../domain/repositories/user-repository";
import { CreateUserUseCase } from "../domain/usecases/create-user-usecase";
import { DeleteUserUseCase } from "../domain/usecases/delete-user-usecase";
import { ReadAllUsersUseCase } from "../domain/usecases/read-all-users-usecase";
import { ReadUserUseCase } from "../domain/usecases/read-user-usecase";
import { UpdateUserUseCase } from "../domain/usecases/update-user-usecase";
import { FirestoreDB } from "../infrastructure/datastore/database/firestore/firestore-db";
import { FirestoreDBImpl } from "../infrastructure/datastore/database/firestore/firestore-db-impl";
import { UserRepositoryImpl } from "../infrastructure/repositories/user-repository-impl";
import { TYPES } from "./types";

export const container = new Container();

// database
container.bind<FirestoreDB>(TYPES.FirestoreDB).toConstantValue(
  new FirestoreDBImpl({
    options: {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
  })
);

// repository
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImpl);

// usecase
container
  .bind<CreateUserUseCase>(TYPES.CreateUserUseCase)
  .to(CreateUserUseCaseImpl);
container
  .bind<DeleteUserUseCase>(TYPES.DeleteUserUseCase)
  .to(DeleteUserUseCaseImpl);
container
  .bind<ReadAllUsersUseCase>(TYPES.ReadAllUsersUseCase)
  .to(ReadAllUsersUseCaseImpl);
container.bind<ReadUserUseCase>(TYPES.ReadUserUseCase).to(ReadUserUseCaseImpl);
container
  .bind<UpdateUserUseCase>(TYPES.UpdateUserUseCase)
  .to(UpdateUserUseCaseImpl);
