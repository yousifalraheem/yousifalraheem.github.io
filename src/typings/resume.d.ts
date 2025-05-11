interface IExperience {
  title: string;
  employer: string;
  location: string;
  start_date: string;
  end_date?: string;
  achievements: string[];
}

interface IResume {
  profile: string;
  experience: IExperience[];
}
