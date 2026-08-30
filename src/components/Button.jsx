const VARIANTS = {
  primary:
    "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
  secondary:
    "border border-slate-700 text-slate-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500",
  danger:
    "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white",
};

export default function Button({
  children,
  onClick,
  variant = "secondary",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl px-6 py-3 font-bold transition-all duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 ${VARIANTS[variant] ?? VARIANTS.secondary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}