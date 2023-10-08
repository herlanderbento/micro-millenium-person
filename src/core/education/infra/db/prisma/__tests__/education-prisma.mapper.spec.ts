import { Education } from '../../../../domain';
import { EducationPrismaMapper } from '../education-prisma.mapper';

describe('EducationPrismaMapper', () => {
  test('should map entity to model', () => {
    const createdAt = new Date();
    const updatedAt = new Date();

    const entity = new Education({
      personId: '46f61619-ea05-4adf-aa5e-9844aded12fc',
      title: 'Bachelor of Science',
      educationType: 'Degree',
      institute: 'Metropolitan University of Angola IMETRO',
      address: 'Bento Hill University St',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2023-05-01'),
      description: 'Studied computer science.',
      isCurrent: false,
      isVerified: true,
      createdAt,
      updatedAt,
    });

    const model = EducationPrismaMapper.toModel(entity);

    expect(model).toStrictEqual({
      id: entity.id,
      personId: '46f61619-ea05-4adf-aa5e-9844aded12fc',
      title: 'Bachelor of Science',
      educationType: 'Degree',
      institute: 'Metropolitan University of Angola IMETRO',
      address: 'Bento Hill University St',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2023-05-01'),
      description: 'Studied computer science.',
      isCurrent: false,
      isVerified: true,
      createdAt,
      updatedAt,
    });
  });

  test('should map model to entity', () => {
    const createdAt = new Date();
    const updatedAt = new Date();

    const model = {
      id: '46f61619-ea05-4adf-aa5e-9844aded12fc',
      personId: 'fe51e631-44c4-4f21-b6de-df1060176085',
      title: 'Bachelor of Science',
      educationType: 'Degree',
      institute: 'Metropolitan University of Angola IMETRO',
      address: 'Bento Hill University St',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2022-05-01'),
      description: 'Studied computer science.',
      isCurrent: false,
      isVerified: true,
      createdAt,
      updatedAt,
    };

    const entity = EducationPrismaMapper.toEntity(model);

    expect(entity.id).toBe('46f61619-ea05-4adf-aa5e-9844aded12fc');
    expect(entity).toMatchObject({
      personId: 'fe51e631-44c4-4f21-b6de-df1060176085',
      title: 'Bachelor of Science',
      educationType: 'Degree',
      institute: 'Metropolitan University of Angola IMETRO',
      address: 'Bento Hill University St',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2022-05-01'),
      description: 'Studied computer science.',
      isCurrent: false,
      isVerified: true,
      createdAt,
      updatedAt,
    });
  });
});
