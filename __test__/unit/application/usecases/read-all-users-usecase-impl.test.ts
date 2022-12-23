import * as TypeMoq from "typemoq";
import { ReadAllUsersUseCaseImpl } from "../../../../src/application/usecases/read-all-users-usecase-impl";
import { InternalError } from "../../../../src/core/error/internal-error";
import { Failure, Success } from "../../../../src/core/result";
import { User } from "../../../../src/domain/entities/user";
import { UserRepository } from "../../../../src/domain/repositories/user-repository";

describe("ReadAllUsersUseCase", () => {
  const users: User[] = [
    {
      uuid: "1",
      name: "name1",
      gender: "male",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      uuid: "2",
      name: "name2",
      gender: "female",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  test("[正常系] ユーザー一覧の取得", async () => {
    const mock: TypeMoq.IMock<UserRepository> = TypeMoq.Mock.ofType();
    mock
      .setup((m) => m.findAll())
      .returns(async () => {
        return new Success(users);
      });
    const usecase = new ReadAllUsersUseCaseImpl(mock.object);
    const result = await usecase.execute({});
    expect(result.isSuccess() ? JSON.stringify(result.value) : undefined).toBe(
      JSON.stringify(users)
    );
  });

  test("[異常系] ユーザー一覧の取得", async () => {
    const mock: TypeMoq.IMock<UserRepository> = TypeMoq.Mock.ofType();
    mock
      .setup((m) => m.findAll())
      .returns(async () => {
        return new Failure(new InternalError());
      });
    const usecase = new ReadAllUsersUseCaseImpl(mock.object);
    const result = await usecase.execute({});
    console.log(result.isFailure() ? result.error.name : undefined);
    expect(result.isFailure() ? result.error.name : undefined).toBe(
      InternalError.name
    );
  });
});
