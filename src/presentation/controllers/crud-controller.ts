import { container } from "../../di/inversify.config";
import { TYPES } from "../../di/types";
import { CreateUserUseCase } from "../../domain/usecases/create-user-usecase";
import { DeleteUserUseCase } from "../../domain/usecases/delete-user-usecase";
import { ReadAllUsersUseCase } from "../../domain/usecases/read-all-users-usecase";
import { UpdateUserUseCase } from "../../domain/usecases/update-user-usecase";
import {
  toastCreateParams,
  toastDeleteParams,
  toastReadParams,
  toastUpdateParams,
} from "./lib/toast-params";
import { users } from "./lib/users";

export const useCrudController = () => {
  async function createUser() {
    const query = users[Math.floor(Math.random() * users.length)];
    const res = await container
      .get<ReadAllUsersUseCase>(TYPES.ReadAllUsersUseCase)
      .execute({});

    // set max document size 10
    if (res.length < 10) {
      try {
        await container
          .get<CreateUserUseCase>(TYPES.CreateUserUseCase)
          .execute({ gender: query.gender, name: query.name });
        return toastCreateParams.success;
      } catch (error) {
        return toastCreateParams.errorException;
      }
    } else {
      return toastCreateParams.errorCaptured;
    }
  }

  async function readAllUsers() {
    const res = await container
      .get<ReadAllUsersUseCase>(TYPES.ReadAllUsersUseCase)
      .execute({});
    if (res.length > 0) {
      return toastReadParams.success;
    } else {
      return toastReadParams.errorCaptured;
    }
  }

  async function updateUser() {
    const query = users[Math.floor(Math.random() * users.length)];
    const res = await container
      .get<ReadAllUsersUseCase>(TYPES.ReadAllUsersUseCase)
      .execute({});

    // update random user with random user data
    if (res.length > 0) {
      const uuid = res[Math.floor(Math.random() * res.length)].uuid;
      try {
        await container
          .get<UpdateUserUseCase>(TYPES.UpdateUserUseCase)
          .execute({ gender: query.gender, name: query.name, uuid: uuid });
        return toastUpdateParams.success;
      } catch (error) {
        return toastUpdateParams.errorException;
      }
    } else {
      return toastUpdateParams.errorCaptured;
    }
  }

  async function deleteUser() {
    const res = await container
      .get<ReadAllUsersUseCase>(TYPES.ReadAllUsersUseCase)
      .execute({});

    // delete random user
    if (res.length > 0) {
      const uuid = res[Math.floor(Math.random() * res.length)].uuid;
      try {
        await container
          .get<DeleteUserUseCase>(TYPES.DeleteUserUseCase)
          .execute({ uuid: uuid });
        return toastDeleteParams.success;
      } catch (error) {
        return toastDeleteParams.errorException;
      }
    } else {
      return toastDeleteParams.errorCaptured;
    }
  }

  return {
    createUser,
    readAllUsers,
    updateUser,
    deleteUser,
  };
};
