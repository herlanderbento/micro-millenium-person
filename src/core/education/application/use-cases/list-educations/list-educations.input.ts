import { EducationFilter } from '../../../domain';
import { SortDirection } from '../../../../shared/domain';

export type ListEducationsInput = {
  page?: number;
  per_page?: number;
  sort?: string | null;
  sort_dir?: SortDirection | null;
  filter?: EducationFilter | null;
};
