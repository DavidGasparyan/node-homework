import {Inject, Service} from "typedi";
import {AppDataSource} from "../db/data-source";
import {User} from '../entity/User';
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {InjectRepository} from "typeorm-typedi-extensions";

@Service()
export class UsersService {
  private userRepository = AppDataSource.getRepository(User);

  async get(id: number): Promise<User | null> {

    return await this.userRepository.findOneBy({id});
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createMultiple(users: User[]): Promise<User[]> {
    return await this.userRepository.save(users);
  }

  async update(id: number, updatedUser: User): Promise<UpdateResult> {
    return await this.userRepository.update({id}, updatedUser);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete({id});
  }
}

