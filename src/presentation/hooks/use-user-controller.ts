import { atom, useRecoilState } from "recoil";

type UserState = {
  id: string;
  name: string;
};

type UserListState = {
  users: UserState[];
};

const userListState = atom<UserListState>({
  key: "user",
  default: {
    users: [],
  },
});

// 語尾は一旦Controllerにしているが、Hooks等で統一してもいいとおもう
export const useUserListController = () => {
  const [users, setUsers] = useRecoilState(userListState);

  async function reload(): Promise<void> {
    setUsers({
      users: [
        { id: "1", name: "kodai" },
        { id: "2", name: "shinpei" },
      ],
    });
  }

  return { users, reload };
};
