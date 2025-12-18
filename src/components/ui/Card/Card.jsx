function Card({ className = "", children }) {
  return (
    <div className={`rounded-lg bg-white/95 text-black shadow-xl ${className}`}>
      {children}
    </div>
  );
}

export default Card;
