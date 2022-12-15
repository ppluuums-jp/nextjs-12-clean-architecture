import { atom } from "recoil";
import { ToastState } from "../types/toast-state";

export const createState = atom<ToastState>({
  key: "createState",
  default: "success",
});
