import dayjs from "dayjs";

export class Experience {
  private readonly _title: string;
  private readonly _employer: string;
  private readonly _location: string;
  private readonly _start_date: string;
  private readonly _end_date?: string;
  private readonly _achievements: Readonly<string[]>;

  constructor(experience: IExperience) {
    this._title = experience.title;
    this._employer = experience.employer;
    this._location = experience.location;
    this._start_date = experience.start_date;
    this._end_date = experience.end_date;
    this._achievements = Object.freeze(experience.achievements);
  }

  get title() {
    return this._title;
  }

  get employer() {
    return this._employer;
  }

  get location() {
    return this._location;
  }

  get startDate() {
    return new Date(this._start_date);
  }

  get endDate() {
    if (!this._end_date) return undefined;
    return new Date(this._end_date);
  }

  get achievements() {
    return this._achievements;
  }

  get duration() {
    if (this._end_date) {
      return `${this._start_date} - ${this._end_date}`;
    }
    return `${this._start_date} - Present`;
  }

  get durationInYears() {
    const startDate = dayjs(this._start_date);
    const endDate = dayjs(this._end_date || new Date());
    return endDate.diff(startDate, "years");
  }

  get durationInMonths() {
    const startDate = dayjs(this._start_date);
    const endDate = dayjs(this._end_date || new Date());
    return endDate.diff(startDate, "months");
  }

  json() {
    return {
      title: this._title,
      employer: this._employer,
      location: this._location,
      start_date: this._start_date,
      end_date: this._end_date,
      achievements: this._achievements,
    };
  }
}
