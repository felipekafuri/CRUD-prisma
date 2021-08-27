import { PrismaClient, User } from '@prisma/client'
import { CreateUserDTO } from '../Dtos/UserDTO';

class UsersRepository {
  private orm: PrismaClient
  constructor() {
    this.orm = new PrismaClient();
  }

  async create({ email }: CreateUserDTO): Promise<User> {
    try {
      const user = await this.orm.user.create({ data: { email } })
      return user
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async listAll(): Promise<User[]> {
    try {
      return this.orm.user.findMany()
    } catch (error) {
      throw new Error(error)
    }
  }
}

export { UsersRepository }