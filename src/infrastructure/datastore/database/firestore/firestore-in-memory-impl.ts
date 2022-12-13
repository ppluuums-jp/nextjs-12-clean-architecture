import { Firestore } from "./firestore";
import { FSInsertUserParam } from "./model/insert-user-param";
import { FSUpdateUserParam } from "./model/update-user-param";
import { FSUser } from "./model/user";

export class FirestoreInMemoryImpl implements Firestore {
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
    let user = await this.findUserById(userId);
    this.users.forEach((v, i) => {
      if (v.id === user.id) {
        delete this.users[i];
      }
    });
  }

  async findUserById(userId: string): Promise<FSUser> {
    let users = this.users.filter((v) => v.id === userId);
    if (users.length === 0) {
      throw Error();
    }
    if (users.length >= 2) {
      throw Error();
    }
    return users[0];
  }

  async insertUser(param: FSInsertUserParam): Promise<void> {
    let id = `${++this.latestId}`;
    let createdAt = new Date();
    let updatedAt = new Date();
    let user: FSUser = {
      id: id,
      name: param.name,
      gender: param.gender,
      createdAt: createdAt,
      updatedAt: updatedAt,
    };
    this.users.push(user);
  }

  async updateUser(param: FSUpdateUserParam): Promise<void> {
    let user = await this.findUserById(param.userId);
    let updatedAt = new Date();
    user.name = param.name;
    user.gender = param.gender;
    user.updatedAt = updatedAt;
    this.users.forEach((v, i) => {
      if (v.id === user.id) {
        this.users.splice(i, 1, user);
      }
    });
  }
}
