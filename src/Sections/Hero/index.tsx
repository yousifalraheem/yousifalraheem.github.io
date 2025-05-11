import { Space } from "@/components/Space";
import "./styles.css";

export function Hero() {
  return (
    <section id="hero">
      <img className="moon" src="/moon.png" alt="Moon" />
      <Space />
      <div className="content">
        <h1>Welcome to my portfolio</h1>
        <p>Yousif Al-Raheem</p>
      </div>

      <div className="get-started">
        <p className="text-smt text-white">Scroll down</p>
        <div className="icon-wrapper">
          {[...Array(3)].map((_, i) => {
            return <div key={i} className="icon" />;
          })}
        </div>
      </div>
    </section>
  );
}
