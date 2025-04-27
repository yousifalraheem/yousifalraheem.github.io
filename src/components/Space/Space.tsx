import "./styles.css";

export default function Space() {
  return (
    <section id="space">
      <div className="content">
        <h1>Welcome to my portfolio</h1>
        <p>Yousif Al-Raheem</p>
      </div>
      <img className="moon" src="/moon.png" alt="Moon" />
      <span className="star" />
      <span className="star" />
      <span className="star" />
      <span className="star" />
    </section>
  );
}
