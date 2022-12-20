import axios from "axios";
import { CreateUserRequestBody } from "../../pages/api/users";
import {
  toastCreateParams,
  toastDeleteParams,
  toastReadParams,
  toastUpdateParams,
} from "./lib/toast-params";
import { users } from "./lib/users";

export const useCrudController = () => {
  async function createUsers() {
    const url = "/api/users";
    const query: CreateUserRequestBody =
      users[Math.floor(Math.random() * users.length)];
    const res = await axios.get(url);

    // set max document size 10
    if (res.data.length < 10) {
      try {
        await axios.post(url, query);
        return toastCreateParams.success;
      } catch (error) {
        return toastCreateParams.errorException;
      }
    } else {
      return toastCreateParams.errorCaptured;
    }
  }

  async function readAllUsers() {
    const url = "/api/users";
    const res = await axios.get(url);
    if (res.data.length > 0) {
      return toastReadParams.success;
    } else {
      return toastReadParams.errorCaptured;
    }
  }

  async function updateUsers() {
    const url = "/api/users";
    const query: CreateUserRequestBody =
      users[Math.floor(Math.random() * users.length)];
    const res = await axios.get(url);

    // update random user with random user data
    if (res.data.length > 0) {
      const uuid = res.data[Math.floor(Math.random() * res.data.length)].uuid;
      try {
        await axios.put(url + "/" + uuid, query);
        return toastUpdateParams.success;
      } catch (error) {
        return toastUpdateParams.errorException;
      }
    } else {
      return toastUpdateParams.errorCaptured;
    }
  }

  async function deleteUsers() {
    const url = "/api/users";
    const res = await axios.get(url);

    // delete random user
    if (res.data.length > 0) {
      const uuid = res.data[Math.floor(Math.random() * res.data.length)].uuid;
      try {
        await axios.delete(url + "/" + uuid, uuid);
        return toastDeleteParams.success;
      } catch (error) {
        return toastDeleteParams.errorException;
      }
    } else {
      return toastDeleteParams.errorCaptured;
    }
  }

  return {
    createUsers,
    readAllUsers,
    updateUsers,
    deleteUsers,
  };
};
