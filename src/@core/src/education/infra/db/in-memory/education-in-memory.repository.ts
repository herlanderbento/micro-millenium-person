import { InMemoryRepository, InMemorySearchableRepository } from "../../../../@seedwork/domain";
import { Education, EducationId, IEducationRepository } from "../../../domain";

export class EducationInMemoryRepository
  extends InMemorySearchableRepository<Education, EducationId>
  implements IEducationRepository {
  protected applyFilter(items: Education[], filter: string): Promise<Education[]> {
    throw new Error("Method not implemented.");
  }
}
