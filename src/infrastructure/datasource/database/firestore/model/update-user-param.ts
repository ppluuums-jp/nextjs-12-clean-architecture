import { FSGender } from "./gender";

export type FSUpdateUserParam = {
  userId: string;
  name?: string;

  gender?: FSGender;
};
