import { PersonPrismaRepository } from '../../../infra';
import { UpdatePersonUseCase } from './update-person.use-case';

export class UpdatePersonUseCaseFactory {
  static create(): UpdatePersonUseCase {
    const personRepository = new PersonPrismaRepository();
    return new UpdatePersonUseCase(personRepository);
  }
}
