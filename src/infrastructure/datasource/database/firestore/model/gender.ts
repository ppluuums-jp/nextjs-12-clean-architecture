import { Gender } from "../../../../../domain/values/gender";

export type FSGender = 0 | 1 | 2;

export const fsGenderConvertor = {
  toEntity(gender: FSGender): Gender {
    switch (gender) {
      case 0:
        return "other";
      case 1:
        return "male";
      case 2:
        return "female";
    }
  },
  fromEntity(gender: Gender): FSGender {
    switch (gender) {
      case "male":
        return 1;
      case "female":
        return 2;
      case "other":
        return 0;
    }
  },
};
