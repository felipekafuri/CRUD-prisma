import express from 'express'
import { UsersRepository } from './repositories/UsersRepository'
import { CreateUsersService } from './services/CreateUsersService'
import { ListUsersService } from './services/ListUsersService'


const app = express()
app.use(express.json())

app.get('/users', async (req, res) => {
  try {
    const usersRepository = new UsersRepository()
    const listUsersService = new ListUsersService(usersRepository)

    const users = await listUsersService.execute()

    res.json(users).status(200)
  } catch (error) {
    console.log(error)
  }
})

app.post('/users', async (req, res) => {
  try {
    const { email } = req.body

    const usersRepository = new UsersRepository()
    const createUsersService = new CreateUsersService(usersRepository)

    const user = await createUsersService.execute({ email })

    res.json(user).status(200)
  } catch (error) {
    console.log(error)
  }
})


app.listen(3333, () => {
  console.log('Server started on port 3333 🚀')
})