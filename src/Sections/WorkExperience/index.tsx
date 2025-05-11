import "./styles.css";
import { Space } from "@/components/Space";
import { Orbit } from "@/components/Orbit";
import { Resume } from "@/models/Resume";
import { Role } from "@/Sections/WorkExperience/Role";

const resume = new Resume();

export function WorkExperience() {
  return (
    <section id="experience" className="flex-col pb-80">
      <Space />
      <Orbit />
      <h2 id="experience" className="text-3xl mb-10">
        Work experience
      </h2>
      <ul className="content flex flex-col">
        {resume.experience.map((role, i) => {
          return <Role key={i} role={role} />;
        })}
      </ul>
    </section>
  );
}
