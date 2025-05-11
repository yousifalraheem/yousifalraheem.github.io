import "./styles.css";
import { Space } from "@/components/Space";

export function Orbit() {
  return (
    <div className="orbit">
      <Space />
      <img className="earth" src="earth.png" alt="earth" />
      <div className="credit">Credit: NASA</div>
    </div>
  );
}
