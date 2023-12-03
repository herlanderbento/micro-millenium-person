import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { PersonProperties, GenderType } from "../entities/person.entity";
import ClassValidatorFields from "../../../shared/domain/validators/class-validator-fields";

export class PersonRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  userId: string;

  @MaxLength(6)
  @IsString()
  @IsNotEmpty()
  gender: GenderType | string;

  @MaxLength(255)
  @IsString()
  @IsOptional()
  biography: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsBoolean()
  @IsOptional()
  isOpenToWork: boolean;

  @IsBoolean()
  @IsOptional()
  isFreelancer: boolean;

  // @IsDate()
  // @IsNotEmpty()
  // birthdate: Date;

  @IsString()
  @IsOptional()
  avatar: string;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;

  public constructor(props: PersonProperties) {
    Object.assign(this, props);
  }
}

export class PersonValidator extends ClassValidatorFields<PersonRules> {
  public validate(data: PersonProperties): boolean {
    return super.validate(new PersonRules(data ?? ({} as any)));
  }
}

export class PersonValidatorFactory {
  public static create(): PersonValidator {
    return new PersonValidator();
  }
}

export default PersonValidatorFactory