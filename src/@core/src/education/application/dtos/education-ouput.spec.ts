import { Education } from "../../domain";
import { EducationOutputMapper } from "./education-output";

describe("EducationOutputMapper", () => {
  it("should convert a education in output", () => {
    const createdAt = new Date();
    const updatedAt = new Date();
    const entity = new Education({
      personId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      title: "some education",
      educationType: "some training type",
      institute: "some institute",
      description: "some description",
      address: "some address",
      isCurrent: true,
      isVerified: true,
      startDate: new Date("2023-07-15T09:29:58.242Z"),
      endDate: new Date("2023-10-15T09:29:58.242Z"),
      createdAt,
      updatedAt,
    });

    const spyToJSON = jest.spyOn(entity, "toJSON");
    const output = EducationOutputMapper.toOutput(entity);
    expect(spyToJSON).toHaveBeenCalled();
    expect(output).toStrictEqual({
      id: output.id,
      personId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      title: "some education",
      educationType: "some training type",
      institute: "some institute",
      description: "some description",
      address: "some address",
      isCurrent: true,
      isVerified: true,
      startDate: new Date("2023-07-15T09:29:58.242Z"),
      endDate: new Date("2023-10-15T09:29:58.242Z"),
      createdAt,
      updatedAt,
    });
  });
});
