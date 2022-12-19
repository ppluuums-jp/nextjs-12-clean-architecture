import { useRecoilState } from "recoil";
import { readState } from "../state/atoms/read";
import { ToastState } from "../state/types/toast-state";

export function ReadUserController() {}

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
