import { EducationPrismaRepository } from '../../../infra';
import { GetEducationUseCase } from './get-education.use-case';

export class GetEducationUseCaseFactory {
  static create(): GetEducationUseCase {
    const repository = new EducationPrismaRepository();
    return new GetEducationUseCase(repository);
  }
}
