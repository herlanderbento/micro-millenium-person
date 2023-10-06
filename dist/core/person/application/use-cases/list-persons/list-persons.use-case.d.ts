import { IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { PaginationOutputDto } from '../../../../shared/application';
import { PersonOutput } from '../common';
import { ListPersonsInput } from './list-persons.input';
export declare class ListPersonsUseCase implements IUseCase<ListPersonsInput, ListPersonsOutput> {
    private personRepository;
    constructor(personRepository: IPersonRepository);
    execute(input: ListPersonsInput): Promise<ListPersonsOutput>;
    private toOutput;
}
export type ListPersonsOutput = PaginationOutputDto<PersonOutput>;
