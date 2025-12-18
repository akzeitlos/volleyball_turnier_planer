function RailButton({ title, active, disabled, onClick, children, badge }) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`relative h-20 w-20 rounded-lg flex items-center justify-center transition ${
        active
          ? "bg-white text-black "
          : "bg-transparent text-white hover:bg-white/10"
      } ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
    >
      {children}
      {badge ? (
        <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
          {badge}
        </span>
      ) : null}
    </button>
  );
}

export default RailButton;