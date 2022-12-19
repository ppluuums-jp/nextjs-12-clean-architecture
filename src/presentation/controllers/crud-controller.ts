import { useRecoilState } from "recoil";
import { createState } from "../state/atoms/create";
import { deleteState } from "../state/atoms/delete";
import { readState } from "../state/atoms/read";
import { updateState } from "../state/atoms/update";
import { ToastState } from "../state/types/toast-state";

export const useCrudController = () => {
  function createUsers() {}

  async function readUsers() {
    const res = await fetch("/api/users").then((data) => data.json());
    if (res != null) {
      return "success";
    } else {
      return "error";
    }
  }
  function updateUsers() {}
  function deleteUsers() {}

  return {
    createUsers,
    readUsers,
    updateUsers,
    deleteUsers,
  };
};
