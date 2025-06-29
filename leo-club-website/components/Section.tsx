export default function Section({ id, title, subtitle, children }: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-leoRed mb-2 text-center">{title}</h3>
        {subtitle && <p className="text-gray-700 text-center mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}