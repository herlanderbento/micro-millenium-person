import { ISearchableRepository, RepositoryInterface } from "../../../@seedwork/domain";
import { Education, EducationId } from "../entities/education.entity";

export interface IEducationRepository
  extends Omit<ISearchableRepository<Education, EducationId>, "bulkCreate" | "sortableFields" | "search"> {}
