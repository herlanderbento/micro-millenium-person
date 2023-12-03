import { IUseCase } from '../../../../shared/application';
import { IPersonRepository } from '../../../domain';
import { PersonOutput, PersonOutputMapper } from '../common';
import { UpdatePersonAvatarInput } from './update-person-avatar.input';

export class UpdatePersonAvatarUseCase
  implements IUseCase<UpdatePersonAvatarInput, UpdatePersonAvatarOutput>
{
  constructor(private personRepository: IPersonRepository) {}

  async execute(
    input: UpdatePersonAvatarInput
  ): Promise<UpdatePersonAvatarOutput> {
    const entity = await this.personRepository.findById(input.id, true);
    entity.updateAvatar(input.avatar);

    await this.personRepository.update(entity);

    return PersonOutputMapper.toOutput(entity);
  }
}

export type UpdatePersonAvatarOutput = PersonOutput;
