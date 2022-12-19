import { atom } from "recoil";
import { ToastState } from "../types/toast-state";

export const readState = atom<ToastState>({
  key: "readState",
  default: "success",
});
