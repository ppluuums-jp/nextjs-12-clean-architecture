import { useRecoilState } from "recoil";
import { createState } from "../state/atoms/create";
import { deleteState } from "../state/atoms/delete";
import { readState } from "../state/atoms/read";
import { updateState } from "../state/atoms/update";
import { ToastState } from "../state/types/toast-state";

export function ReadUserController() {}

export function CreateUserController(): [ToastState, () => void] {
  const [toastState, setState] = useRecoilState(createState);
  const res = fetch("/api/users").then((data) => data.json());
  const handler = () => {
    if (res != null) {
      setState("success");
      console.log(res);
    } else {
      setState("error");
    }
  };
  return [toastState, handler];
}

export function ReadAllUserController(): [ToastState, () => void] {
  const [toastState, setState] = useRecoilState(readState);
  const res = fetch("/api/users").then((data) => data.json());
  const handler = () => {
    if (res != null) {
      setState("success");
      console.log(res);
    } else {
      setState("error");
    }
  };
  return [toastState, handler];
}

export function UpdateUserController(): [ToastState, () => void] {
  const [toastState, setState] = useRecoilState(updateState);
  const res = fetch("/api/users").then((data) => data.json());
  const handler = () => {
    if (res != null) {
      setState("success");
      console.log(res);
    } else {
      setState("error");
    }
  };
  return [toastState, handler];
}

export function DeleteUserController(): [ToastState, () => void] {
  const [toastState, setState] = useRecoilState(deleteState);
  const res = fetch("/api/users").then((data) => data.json());
  const handler = () => {
    if (res != null) {
      setState("success");
      console.log(res);
    } else {
      setState("error");
    }
  };
  return [toastState, handler];
}
