import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;
    const user = this.create({ username, password });
    await this.save(user);
  }
}
