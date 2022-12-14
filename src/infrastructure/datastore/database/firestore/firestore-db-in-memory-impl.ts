import { FirestoreDB } from "./firestore-db";
import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";
import { FSUser } from "./model/user";

export class FirestoreDBInMemoryImpl implements FirestoreDB {
  private users: FSUser[] = [
    {
      id: "1",
      name: "kodai",
      gender: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      name: "shimpei",
      gender: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  private latestId: number = 2;
  async deleteUser(userId: string): Promise<void> {
    const user = await this.findUserById(userId);
    this.users.forEach((v, i) => {
      if (v.id === user.id) {
        delete this.users[i];
      }
    });
  }

  async findUserById(userId: string): Promise<FSUser> {
    const users = this.users.filter((v) => v.id === userId);
    if (users.length === 0) {
      throw Error();
    }
    if (users.length >= 2) {
      throw Error();
    }
    return users[0];
  }

  async insertUser(param: FSInsertUserParam): Promise<void> {
    const id = `${++this.latestId}`;
    const createdAt = new Date();
    const user: FSUser = {
      id: id,
      name: param.name,
      gender: param.gender,
      createdAt: createdAt,
      updatedAt: createdAt,
    };
    this.users.push(user);
  }

  async updateUser(param: FSUpdateUserParam): Promise<void> {
    const oldUser = await this.findUserById(param.userId);
    const updatedAt = new Date();
    const user: FSUser = {
      createdAt: oldUser.createdAt,
      gender: param.gender ?? oldUser.gender,
      id: param.userId,
      name: param.name ?? oldUser.name,
      updatedAt: updatedAt,
    };
    this.users.forEach((v, i) => {
      if (v.id === user.id) {
        this.users.splice(i, 1, user);
      }
    });
  }
}
