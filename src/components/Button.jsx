export default function Button({
  children,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-6 py-3 font-bold transition ${className}`}
    >
      {children}
    </button>
  );
}
