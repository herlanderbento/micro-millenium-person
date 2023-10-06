import { PersonPrismaRepository } from '../../../infra';
import { DeletePersonUseCase } from './delete-person.use-case';

export class DeletePersonUseCaseFactory {
  static create(): DeletePersonUseCase {
    const personRepository = new PersonPrismaRepository();
    return new DeletePersonUseCase(personRepository);
  }
}
