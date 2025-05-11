import "./styles.css";

export function Space() {
  return (
    <div className="space">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <span key={i} className="star" />
        ))}
    </div>
  );
}
