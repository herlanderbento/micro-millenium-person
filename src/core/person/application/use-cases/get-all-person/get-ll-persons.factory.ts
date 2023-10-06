import { PersonPrismaRepository } from '../../../infra';
import { GetAllPersonsUseCase } from './get-all-persons.use-case';

export class GetAllPersonsUseCaseFactory {
  static create(): GetAllPersonsUseCase {
    const personRepository = new PersonPrismaRepository();
    return new GetAllPersonsUseCase(personRepository);
  }
}
