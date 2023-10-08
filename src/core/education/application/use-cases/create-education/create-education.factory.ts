import { PersonPrismaRepository } from '../../../../person/infra';
import { EducationPrismaRepository } from '../../../infra';
import { CreateEducationUseCase } from './create-education.use-case';

export class CreateEducationUseCaseFactory {
  static create(): CreateEducationUseCase {
    const educationrepository = new EducationPrismaRepository();
    const personRepository = new PersonPrismaRepository();

    return new CreateEducationUseCase(educationrepository, personRepository);
  }
}
