
export function SeoIntro({ text }: { text: string }) {
  return <p className="mt-4 text-slate-600">{text}</p>;
}

export function SeoList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-slate-600">
      {items.map((item) => (
        <li key={item}>• {item}</li>
      ))}
    </ul>
  );
}

export function SeoFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">FAQ</h2>
      <div className="mt-4 space-y-4">
        {faqs.map((f) => (
          <div key={f.q}>
            <h3 className="font-semibold">{f.q}</h3>
            <p className="text-slate-600">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
