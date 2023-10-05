export type GenderType = 'male' | 'female';

export type UpdatePersonInput = {
  id: string;
  gender: GenderType;
  address: string;
  birthdate: Date;
  biography?: string;
  shareableSection?: string;
};
