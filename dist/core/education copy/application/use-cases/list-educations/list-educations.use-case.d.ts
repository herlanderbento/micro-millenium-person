import { IUseCase, PaginationOutputDto } from '../../../../shared/application';
import { IEducationRepository } from '../../../domain';
import { EducationOutput } from '../common';
import { ListEducationsInput } from './list-educations.input';
export declare class ListEducationsUseCase implements IUseCase<ListEducationsInput, ListEducationsOutput> {
    private educationRepository;
    constructor(educationRepository: IEducationRepository);
    execute(input: ListEducationsInput): Promise<ListEducationsOutput>;
    private toOutput;
}
export type ListEducationsOutput = PaginationOutputDto<EducationOutput>;
