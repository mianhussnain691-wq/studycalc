export default function InputField({
  type = "text",
  placeholder,
  value,
  onChange,
  min,
  max,
  step,
  readOnly = false,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      readOnly={readOnly}
      className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
    />
  );
}