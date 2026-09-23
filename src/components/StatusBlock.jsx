export default function StatusBlock({ emoji,title, subtitle, actionLabel, onAction }) {
  return (
    <div className="status">
      <div className="status-code">404</div>
      <div>{emoji}</div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button className="primary-btn" onClick={onAction}>
        {actionLabel}
      </button>
    </div>
  );
}

