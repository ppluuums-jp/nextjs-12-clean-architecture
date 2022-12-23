import * as TypeMoq from "typemoq";
import { CreateUserUseCaseImpl } from "../../../../src/application/usecases/create-user-usecase-impl";
import { Failure, Success } from "../../../../src/core/result";
import { User } from "../../../../src/domain/entities/user";
import { UserRepository } from "../../../../src/domain/repositories/user-repository";
import { CreateUserUseCaseParam } from "../../../../src/domain/usecases/create-user-usecase";

describe("CreateUserUseCase", () => {
  let users: User[] = [
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
  test("[正常系] ユーザー作成", async () => {
    const param: CreateUserUseCaseParam = {
      name: "name3",
      gender: "male",
    };
    const mock: TypeMoq.IMock<UserRepository> = TypeMoq.Mock.ofType();
    mock
      .setup((m) => m.create(param))
      .returns(async () => {
        if (users.filter((v) => v.name === param.name).length !== 0) {
          return new Failure(new Error());
        }
        return new Success(true);
      });
    const usecase = new CreateUserUseCaseImpl(mock.object);
    const result = await usecase.execute(param);
    expect(result.isSuccess()).toBe(true);
  });

  test("[異常系] ユーザー作成", async () => {
    const param: CreateUserUseCaseParam = {
      name: "name1",
      gender: "male",
    };
    const mock: TypeMoq.IMock<UserRepository> = TypeMoq.Mock.ofType();
    mock
      .setup((m) => m.create(param))
      .returns(async () => {
        if (users.filter((v) => v.name === param.name).length !== 0) {
          return new Failure(new Error());
        }
        return new Success(true);
      });
    const usecase = new CreateUserUseCaseImpl(mock.object);
    const result = await usecase.execute(param);
    console.log(users);
    expect(result.isSuccess()).toBe(false);
  });
});
