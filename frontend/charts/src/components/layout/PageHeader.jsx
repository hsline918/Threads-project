export default function PageHeader({ title }) {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-medium text-gray-950 font-['Noto Sans CJK TC']">{title}</h1>
    </div>
  );
}