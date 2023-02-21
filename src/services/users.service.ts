import {User} from "../types/User.type";
import {delay} from "../functions/delay.function";
import {Service} from "typedi";

@Service()
export class UsersService {
  private users: User[] = [];

  async get(id: string): Promise<User> {
    const user = this.users.find((user: User) => user.id === id);

    if (user) {
      return delay(user);
    }

    return {} as User;
  }

  async getAll(): Promise<User[]> {
    return delay(this.users);
  }

  async createMultiple(users: User[]): Promise<User[]> {
    const updatedUsers = [];
    for (let user of users) {
      const isFound = this.users.some(currentUser => currentUser.id === user.id);

      if (!isFound) {
        this.users.push(user);
        updatedUsers.push(user);
      }
    }

    return delay(updatedUsers);
  }

  async update(id: string, updatedUser: User): Promise<User> {
    const userExists = this.users.find(user => user.id === id);

    if (userExists) {
      this.users = this.users.map(user => user.id === id ? { ...user, ...updatedUser} : user);
    } else {
      this.users.push(updatedUser);
    }

    return delay(updatedUser);
  }

  async delete(id: string) {
    const user = this.users.find((user: User) => user.id === id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
      return delay(user);
    }

    // update validations here
    throw Error('Not found');
  }
}

