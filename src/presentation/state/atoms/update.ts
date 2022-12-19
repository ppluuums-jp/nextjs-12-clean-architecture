import { atom } from "recoil";
import { ToastState } from "../types/toast-state";

export const updateState = atom<ToastState>({
  key: "updateState",
  default: "success",
});
