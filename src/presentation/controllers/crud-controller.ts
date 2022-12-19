import axios from "axios";

export const useCrudController = () => {
  async function createUsers() {
    const url = "/api/users";
  }

  async function readAllUsers() {
    const url = "/api/users";
    const res = await axios(url);
    if (res.data != null) {
      console.log(res.data);
      return "success";
    } else {
      return "error";
    }
  }
  function updateUsers() {}
  function deleteUsers() {}

  return {
    createUsers,
    readAllUsers,
    updateUsers,
    deleteUsers,
  };
};
