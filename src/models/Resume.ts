import resume from "../resume.yaml";
import { Experience } from "@/models/Experience";

export class Resume {
  private readonly _profile = resume.profile;
  private readonly _experience = resume.experience.map(
    (e) => new Experience(e),
  );

  get profile() {
    return this._profile;
  }

  get experience() {
    return this._experience;
  }

  get totalYearsOfExperience() {
    const totalMonths = this._experience.reduce(
      (acc, cur) => acc + cur.durationInMonths,
      0,
    );
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return {
      years,
      months,
    };
  }

  json() {
    return {
      profile: this._profile,
      experience: this._experience.map((e) => e.json()),
    };
  }
}
