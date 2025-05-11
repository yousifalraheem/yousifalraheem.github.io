import { Space } from "@/components/Space";
import { Orbit } from "@/components/Orbit";
import "./styles.css";

export function WhoAmI() {
  return (
    <section id="who-am-ai">
      <Space />
      <Orbit />

      <div className="content">
        <h2 className="text-4xl mb-10">Who am I?</h2>
        <div className="item">
          <p>
            I’m <span className="name text-grow">Yousif Al-Raheem</span>, a
            software engineer with a deep interest in building clean,
            accessible, and performant web experiences. I specialize in{" "}
            <a href="https://react.dev" target="_blank" className="react">
              <span className="text-grow">React</span>
            </a>{" "}
            and modern browser standards, and I enjoy working at the
            intersection of architecture, user experience, and long-term
            maintainability. Whether it’s building internal tooling, design
            systems, or cross-platform apps, I take pride in writing code that’s
            simple, extensible, and future-proof.
          </p>
        </div>

        <div className="item">
          <p>
            I thrive on solving challenging problems, mentoring others, and
            occasionally contributing to open source or writing about the things
            I’ve learned.
          </p>
        </div>
      </div>
    </section>
  );
}
