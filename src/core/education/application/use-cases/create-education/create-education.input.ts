import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  validateSync,
} from 'class-validator';
import { PersonId } from '../../../../person/domain';

export type CreateEductionInputConstructorProps = {
  personId: PersonId | string;
  title: string;
  educationType: string;
  institute: string;
  address?: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  isCurrent?: boolean;
  isVerified?: boolean;
};

export class CreateEducationInput {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  personId: PersonId | string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  title: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  educationType: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  institute: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsBoolean()
  @IsOptional()
  isCurrent: boolean;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsOptional()
  isVerified: boolean;

  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @IsDate()
  @IsOptional()
  endDate?: Date;

  constructor(props: CreateEductionInputConstructorProps) {
    if (!props) return;
    Object.assign(this, props);
  }
}

export class ValidateCreateEducationInput {
  static validate(input: CreateEducationInput) {
    return validateSync(input);
  }
}
