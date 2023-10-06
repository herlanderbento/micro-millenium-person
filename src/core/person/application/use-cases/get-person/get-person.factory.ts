import { PersonPrismaRepository } from '../../../infra';
import { GetPersonUseCase } from './get-person.use-case';

export class GetPersonUseCaseFactory {
  static create(): GetPersonUseCase {
    const personRepository = new PersonPrismaRepository();
    return new GetPersonUseCase(personRepository);
  }
}
