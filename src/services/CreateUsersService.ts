import { User } from "@prisma/client";
import { CreateUserDTO } from "../Dtos/UserDTO";
import { UsersRepository } from "../repositories/UsersRepository";



class CreateUsersService {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = new UsersRepository()
  }

  public async execute({ email }: CreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create({ email });

    return user;
  }
}

export { CreateUsersService }