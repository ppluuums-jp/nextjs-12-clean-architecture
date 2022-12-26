import { atom, atomFamily, selectorFamily, useRecoilState } from "recoil";

type UserState = {
  id: string;
  name: string;
};

type UserListState = {
  users: UserState[];
};

const userState = selectorFamily<UserState, string>({
  key: "user-state",
  get: (id) => async () => {
    return await useUserListController().findById(id);
  },
});

const selectedUserState = atomFamily<UserState, string>({
  key: "selected-user-state",
  default: undefined,
});

const userListState = atom<UserListState>({
  key: "user-list-state",
  default: {
    users: [],
  },
});

// 語尾は一旦Controllerにしているが、Hooks等で統一してもいいとおもう
export const useUserListController = () => {
  const [users, setUsers] = useRecoilState(userListState);

  async function fetch(): Promise<void> {
    setUsers({
      users: [
        { id: "1", name: "name_1" },
        { id: "2", name: "name_2" },
      ],
    });
  }

  async function findById(id: string): Promise<UserState> {
    return { id: "1", name: "name_1" };
  }

  function selectUser(id: string) {}

  return { users, reload: fetch, findById };
};

export const useUserController = (id: string) => {
  const [user, setUser] = useRecoilState(selectedUserState(id));

  async function fetch(): Promise<void> {
    setUser({
      id: id,
      name: `name_${id}`,
    });
  }

  return { user, fetch };
};
