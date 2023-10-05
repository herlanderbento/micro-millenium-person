import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { EducationProperties } from "../entities/education.entity";
import ClassValidatorFields from "../../../shared/domain/validators/class-validator-fields";
import { PersonId } from "../../../person/domain";

export class EducationRules {
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
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;

  constructor(props: EducationProperties) {
    Object.assign(this, props);
  }
}

export class EducationValidator extends ClassValidatorFields<EducationRules> {
  validate(data: EducationProperties): boolean {
    return super.validate(new EducationRules(data ?? ({} as any)));
  }
}

export class EducationValidatorFactory {
  static create(): EducationValidator {
    return new EducationValidator();
  }
}

export default EducationValidatorFactory;
