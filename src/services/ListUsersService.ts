import { User } from "@prisma/client";
import { UsersRepository } from "../repositories/UsersRepository";


class ListUsersService {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = new UsersRepository()
  }

  public async execute(): Promise<User[]> {
    return this.usersRepository.listAll();
  }
}

export { ListUsersService }