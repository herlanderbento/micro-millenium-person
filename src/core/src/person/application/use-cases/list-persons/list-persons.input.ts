import { PersonFilter } from '../../../domain';
import { SortDirection } from '../../../../shared/domain';

export type ListPersonsInput = {
  page?: number;
  per_page?: number;
  sort?: string | null;
  sort_dir?: SortDirection | null;
  filter?: PersonFilter | null;
};
