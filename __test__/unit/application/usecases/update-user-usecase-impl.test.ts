import * as TypeMoq from "typemoq";
import { UpdateUserUseCaseImpl } from "../../../../src/application/usecases/update-user-usecase-impl";
import { Failure, Success } from "../../../../src/core/result";
import { User } from "../../../../src/domain/entities/user";
import { UserRepository } from "../../../../src/domain/interfaces/repositories/user-repository";
import { UpdateUserUseCaseParam } from "../../../../src/domain/interfaces/usecases/update-user-usecase";

describe("UpdateUserUseCase", () => {
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

  test("[正常系] ユーザー更新", async () => {
    const param: UpdateUserUseCaseParam = {
      gender: "female",
      name: "name1",
      uuid: "1",
    };

    const mock: TypeMoq.IMock<UserRepository> = TypeMoq.Mock.ofType();
    mock
      .setup((m) => m.update(param))
      .returns(async (p: UpdateUserUseCaseParam) => {
        if (users.filter((v) => v.uuid === param.uuid).length === 0) {
          return new Failure(new Error());
        }
        users.forEach((v, i) => {
          if (v.uuid === param.uuid) {
            users[i] = {
              createdAt: v.createdAt,
              gender: p.gender,
              name: p.name,
              updatedAt: new Date(),
              uuid: p.uuid,
            };
          }
        });
        return new Success(true);
      });

    const usecase = new UpdateUserUseCaseImpl(mock.object);
    const user: User = {
      uuid: "1",
      name: "name1",
      gender: "female",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const result = await usecase.execute(param);
    const target = users.filter((v) => v.uuid === param.uuid)[0];
    expect(JSON.stringify([target.uuid, target.name, target.gender])).toBe(
      JSON.stringify([user.uuid, user.name, user.gender])
    );
  });

  test("[異常系] ユーザー更新", async () => {
    const param: UpdateUserUseCaseParam = {
      gender: "female",
      name: "name3",
      uuid: "3",
    };
    const mock: TypeMoq.IMock<UserRepository> = TypeMoq.Mock.ofType();
    mock
      .setup((m) => m.update(param))
      .returns(async (p: UpdateUserUseCaseParam) => {
        if (users.filter((v) => v.uuid === param.uuid).length === 0) {
          return new Failure(new Error());
        }
        users.forEach((v, i) => {
          if (v.uuid === param.uuid) {
            users[i] = {
              createdAt: v.createdAt,
              gender: p.gender,
              name: p.name,
              updatedAt: new Date(),
              uuid: p.uuid,
            };
          }
        });
        return new Success(true);
      });

    const usecase = new UpdateUserUseCaseImpl(mock.object);
    const result = await usecase.execute(param);
    expect(result.isSuccess()).toBe(false);
  });
});
