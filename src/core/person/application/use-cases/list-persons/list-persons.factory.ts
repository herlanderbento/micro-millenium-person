import { PersonPrismaRepository } from '../../../infra';
import { ListPersonsUseCase } from './list-persons.use-case';

export class ListPersonsUseCaseFactory {
  static create(): ListPersonsUseCase {
    const personRepository = new PersonPrismaRepository();
    return new ListPersonsUseCase(personRepository);
  }
}
