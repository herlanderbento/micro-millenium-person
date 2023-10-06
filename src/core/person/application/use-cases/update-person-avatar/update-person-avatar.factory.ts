import { PersonPrismaRepository } from '../../../infra';
import { UpdatePersonAvatarUseCase } from './update-person-avatar.use-case';

export class UpdatePersonAvatarUseCaseFactory {
  static create(): UpdatePersonAvatarUseCase {
    const personRepository = new PersonPrismaRepository();
    return new UpdatePersonAvatarUseCase(personRepository);
  }
}
