import { PersonPrismaRepository } from '../../../infra';
import { CreatePersonUseCase } from './create-person.use-case';

export class CreatePersonUseCaseFactory {
  static create(): CreatePersonUseCase {
    const personRepository = new PersonPrismaRepository();
    return new CreatePersonUseCase(personRepository);
  }
}
