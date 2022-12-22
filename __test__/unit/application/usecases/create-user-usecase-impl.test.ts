import * as TypeMoq from "typemoq";
import { ReadAllUsersUseCaseImpl } from "../../../../src/application/usecases/read-all-users-usecase-impl";
import { Success } from "../../../../src/core/result";
import { User } from "../../../../src/domain/entities/user";
import { UserRepository } from "../../../../src/domain/repositories/user-repository";

test("", async () => {
  const users: User[] = [];
  const mock: TypeMoq.IMock<UserRepository> = TypeMoq.Mock.ofType();
  mock
    .setup(async (m) => m.findAll())
    .returns(async () => {
      return new Success(users);
    });
  const usecase = new ReadAllUsersUseCaseImpl(mock.object);
  console.log(usecase.execute({}));
});
