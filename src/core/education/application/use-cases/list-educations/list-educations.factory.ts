import { EducationPrismaRepository } from '../../../infra';
import { ListEducationsUseCase } from './list-educations.use-case';

export class ListEducationsUseCaseFactory {
  static create(): ListEducationsUseCase {
    const repository = new EducationPrismaRepository();
    return new ListEducationsUseCase(repository);
  }
}
