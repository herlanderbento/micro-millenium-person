import { EducationPrismaRepository } from '../../../infra';
import { DeleteEducationUseCase } from './delete-education.use-case';

export class DeleteEducationUseCaseFactory {
  static create(): DeleteEducationUseCase {
    const repository = new EducationPrismaRepository();
    return new DeleteEducationUseCase(repository);
  }
}
