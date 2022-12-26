import {ReadAllUsersUseCaseImpl} from "../application/usecases/read-all-users-usecase-impl";
import {FirestoreDBImpl} from "../infrastructure/datasource/database/firestore/firestore-db-impl";
import {UserRepositoryImpl} from "../infrastructure/repositories/user-repository-impl";

// 以下provider定義の例

// datasource
const firestoreDBDatasourceProvider = new FirestoreDBImpl({ options: {} });

// repository
const userRepositoryProvider = new UserRepositoryImpl(
  firestoreDBDatasourceProvider
);

// usecase
const readAllUsersUseCaseProvider = new ReadAllUsersUseCaseImpl(
  userRepositoryProvider
);
