import { atom } from "recoil";
import { ToastState } from "../types/toast-state";

export const deleteState = atom<ToastState>({
  key: "deleteState",
  default: "success",
});
