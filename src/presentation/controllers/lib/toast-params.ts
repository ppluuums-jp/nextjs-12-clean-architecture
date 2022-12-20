export type toastParamsWithCases = {
  success: toastParams;
  errorException: toastParams;
  errorCaptured: toastParams;
};
export type toastParams = {
  title: string;
  description: string;
  status: "success" | "error" | "warning" | "info";
};

export const toastCreateParams: toastParamsWithCases = {
  success: {
    title: "Create Succeeded.",
    description: "You created a new user.",
    status: "success",
  },
  errorException: {
    title: "Create Failed.",
    description:
      "It is likely due to having some uncaptured troubles. \n Please reload the page.",
    status: "error",
  },
  errorCaptured: {
    title: "Create Failed.",
    description:
      "You might reached the limit number of users. \n Please click delete button.",
    status: "error",
  },
};

export const toastReadParams: toastParamsWithCases = {
  success: {
    title: "Read Succeeded.",
    description: "You read all users in the database.",
    status: "success",
  },
  errorException: {
    title: "Read Failed.",
    description:
      "It is likely due to having some uncaptured troubles. \n Please reload the page.",
    status: "error",
  },
  errorCaptured: {
    title: "Read Failed.",
    description:
      "There seem to be no data in the database. \n Please create users.",
    status: "error",
  },
};

export const toastUpdateParams: toastParamsWithCases = {
  success: {
    title: "Update Succeeded.",
    description: "You updated the user.",
    status: "success",
  },
  errorException: {
    title: "Update Failed.",
    description:
      "It is likely due to having some uncaptured troubles. \n Please reload the page.",
    status: "error",
  },
  errorCaptured: {
    title: "Update Failed.",
    description:
      "There seem to be no data in the database. \n Please create users.",
    status: "error",
  },
};

export const toastDeleteParams: toastParamsWithCases = {
  success: {
    title: "Delete Succeeded.",
    description: "You deleted a existed user.",
    status: "success",
  },
  errorException: {
    title: "Delete Failed.",
    description:
      "It is likely due to having some uncaptured troubles.\n Please reload the page.",
    status: "error",
  },
  errorCaptured: {
    title: "Delete Failed.",
    description:
      "There seem to be no data in the database. \n Please create users.",
    status: "error",
  },
};
