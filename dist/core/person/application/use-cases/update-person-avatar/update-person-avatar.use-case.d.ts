import { IUseCase } from '../../../../shared/application';
import { IPersonRepository } from '../../../domain';
import { PersonOutput } from '../common';
import { UpdatePersonAvatarInput } from './update-person-avatar.input';
export declare class UpdatePersonAvatarUseCase implements IUseCase<UpdatePersonAvatarInput, UpdatePersonAvatarOutput> {
    private personRepository;
    constructor(personRepository: IPersonRepository);
    execute(input: UpdatePersonAvatarInput): Promise<UpdatePersonAvatarOutput>;
}
export type UpdatePersonAvatarOutput = PersonOutput;
