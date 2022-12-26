import * as TypeMoq from "typemoq";
import { ReadUserUseCaseImpl } from "../../../../src/application/usecases/read-user-usecase-impl";
import { NotFoundError } from "../../../../src/core/error/not-found-error";
import { Failure, Success } from "../../../../src/core/result";
import { User } from "../../../../src/domain/entities/user";
import { UserRepository } from "../../../../src/domain/interfaces/repositories/user-repository";

describe("ReadUserUseCase", () => {
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
  test("[正常系] ユーザー取得", async () => {
    const uuid = "1";
    const mock: TypeMoq.IMock<UserRepository> = TypeMoq.Mock.ofType();
    mock
      .setup((m) => m.findById({ uuid: uuid }))
      .returns(async () => {
        const data = users.filter((v) => v.uuid == uuid);
        if (data.length == 0) {
          return new Failure(new NotFoundError());
        }
        return new Success(data[0]);
      });
    const usecase = new ReadUserUseCaseImpl(mock.object);
    const result = await usecase.execute({ uuid });
    expect(result.isSuccess() ? result.value.uuid : undefined).toBe(uuid);
  });

  test("[異常系] ユーザー取得", async () => {
    const uuid = "3";
    const mock: TypeMoq.IMock<UserRepository> = TypeMoq.Mock.ofType();
    mock
      .setup((m) => m.findById({ uuid: uuid }))
      .returns(async () => {
        const data = users.filter((v) => v.uuid == uuid);
        if (data.length == 0) {
          return new Failure(new NotFoundError());
        }
        return new Success(data[0]);
      });
    const usecase = new ReadUserUseCaseImpl(mock.object);
    const result = await usecase.execute({ uuid });
    expect(result.isSuccess()).toBe(false);
  });
});
