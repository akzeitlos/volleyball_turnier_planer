function CardTitle({ className = "", children }) {
  return <div className={`font-semibold text-(--blue) ${className}`}>{children}</div>;
}

export default CardTitle;
