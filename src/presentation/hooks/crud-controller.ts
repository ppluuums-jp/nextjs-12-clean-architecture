import { container } from "../../di/inversify.config";
import { TYPES } from "../../di/types";
import { CreateUserUseCase } from "../../domain/interfaces/usecases/create-user-usecase";
import { DeleteUserUseCase } from "../../domain/interfaces/usecases/delete-user-usecase";
import { ReadAllUsersUseCase } from "../../domain/interfaces/usecases/read-all-users-usecase";
import { UpdateUserUseCase } from "../../domain/interfaces/usecases/update-user-usecase";
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
    if (res.isSuccess()) {
      if (res.value.length < 10) {
        const result = await container
          .get<CreateUserUseCase>(TYPES.CreateUserUseCase)
          .execute({ gender: query.gender, name: query.name });
        if (result.isSuccess()) {
          return toastCreateParams.success;
        } else {
          return toastCreateParams.errorCaptured;
        }
      } else {
        return toastCreateParams.errorCaptured;
      }
    } else {
      return toastReadParams.errorCaptured;
    }
  }

  async function readAllUsers() {
    const res = await container
      .get<ReadAllUsersUseCase>(TYPES.ReadAllUsersUseCase)
      .execute({});
    if (res.isSuccess()) {
      if (res.value.length > 0) {
        return toastReadParams.success;
      } else {
        return toastReadParams.errorCaptured;
      }
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
    if (res.isSuccess()) {
      if (res.value.length > 0) {
        const uuid =
          res.value[Math.floor(Math.random() * res.value.length)].uuid;
        const result = await container
          .get<UpdateUserUseCase>(TYPES.UpdateUserUseCase)
          .execute({ gender: query.gender, name: query.name, uuid: uuid });
        if (result.isSuccess()) {
          return toastUpdateParams.success;
        } else {
          return toastUpdateParams.errorCaptured;
        }
      } else {
        return toastUpdateParams.errorCaptured;
      }
    } else {
      return toastReadParams.errorCaptured;
    }
  }

  async function deleteUser() {
    const res = await container
      .get<ReadAllUsersUseCase>(TYPES.ReadAllUsersUseCase)
      .execute({});

    // delete random user
    if (res.isSuccess()) {
      if (res.value.length > 0) {
        const uuid =
          res.value[Math.floor(Math.random() * res.value.length)].uuid;
        const result = await container
          .get<DeleteUserUseCase>(TYPES.DeleteUserUseCase)
          .execute({ uuid: uuid });
        if (result.isSuccess()) {
          return toastDeleteParams.success;
        } else {
          return toastDeleteParams.errorException;
        }
      } else {
        return toastDeleteParams.errorCaptured;
      }
    } else {
      return toastReadParams.errorCaptured;
    }
  }

  return {
    createUser,
    readAllUsers,
    updateUser,
    deleteUser,
  };
};
