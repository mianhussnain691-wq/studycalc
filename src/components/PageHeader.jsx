export default function PageHeader({
  title,
  description,
}) {
  return (
    <>
      <h1 className="text-5xl font-black text-center">
        {title}
      </h1>

      <p className="mt-4 text-center text-slate-400">
        {description}
      </p>
    </>
  );
}