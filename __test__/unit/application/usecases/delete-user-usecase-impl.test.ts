import * as TypeMoq from "typemoq";
import { DeleteUserUseCaseImpl } from "../../../../src/application/usecases/delete-user-usecase-impl";
import { Failure, Success } from "../../../../src/core/result";
import { User } from "../../../../src/domain/entities/user";
import { UserRepository } from "../../../../src/domain/repositories/user-repository";
import { DeleteUserUseCaseParam } from "../../../../src/domain/usecases/delete-user-usecase";
import { UpdateUserUseCaseParam } from "../../../../src/domain/usecases/update-user-usecase";

describe("DeleteUserUseCase", () => {
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

  test("[正常系] ユーザー削除", async () => {
    const param: DeleteUserUseCaseParam = {
      uuid: "1",
    };

    const mock: TypeMoq.IMock<UserRepository> = TypeMoq.Mock.ofType();
    mock
      .setup((m) => m.delete(param))
      .returns(async (p: UpdateUserUseCaseParam) => {
        if (users.filter((v) => v.uuid === param.uuid).length === 0) {
          return new Failure(new Error());
        }
        users.forEach((v, i) => {
          if (v.uuid === param.uuid) {
            users.splice(i, 1);
          }
        });
        return new Success(true);
      });

    const usecase = new DeleteUserUseCaseImpl(mock.object);
    const user: User = {
      uuid: "1",
      name: "name1",
      gender: "female",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const result = await usecase.execute(param);
    const target = users.filter((v) => v.uuid === param.uuid);
    expect(target.length).toBe(0);
  });

  test("[異常系] ユーザー削除", async () => {
    const param: DeleteUserUseCaseParam = {
      uuid: "3",
    };

    const mock: TypeMoq.IMock<UserRepository> = TypeMoq.Mock.ofType();
    mock
      .setup((m) => m.delete(param))
      .returns(async (p: UpdateUserUseCaseParam) => {
        if (users.filter((v) => v.uuid === param.uuid).length === 0) {
          return new Failure(new Error());
        }
        users.forEach((v, i) => {
          if (v.uuid === param.uuid) {
            users.splice(i, 1);
          }
        });
        return new Success(true);
      });

    const usecase = new DeleteUserUseCaseImpl(mock.object);
    const result = await usecase.execute(param);
    expect(result.isSuccess()).toBe(false);
  });
});
