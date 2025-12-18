function CardTitle({ className = "", children }) {
  return <div className={`font-semibold text-(--primary) ${className}`}>{children}</div>;
}

export default CardTitle;
