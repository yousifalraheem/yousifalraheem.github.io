import { Experience } from "@/models/Experience";

interface Props {
  role: Experience;
}

export function Role({ role }: Props) {
  return (
    <li className="role p-2 animation-timeline">
      <h2 className="text-sm">{role.title}</h2>
      <p className="text-xs">{role.employer}</p>
      <p>{role.location}</p>
      <p>{role.duration}</p>
    </li>
  );
}
