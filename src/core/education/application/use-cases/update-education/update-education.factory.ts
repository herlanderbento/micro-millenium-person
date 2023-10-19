import { EducationPrismaRepository } from '../../../infra';
import { UpdateEducationUseCase } from './update-education.use-case';

export class UpdateEducationUseCaseFactory {
  static create(): UpdateEducationUseCase {
    const repository = new EducationPrismaRepository();
    return new UpdateEducationUseCase(repository);
  }
}
