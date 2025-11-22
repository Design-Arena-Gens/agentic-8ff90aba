const testimonials = [
  {
    name: "Inès A.",
    role: "Founder, SaharaCraft",
    quote:
      "We layered the playbooks onto our artisan marketplace and hit DA 210K net profit in 27 days. The daily tracker made reinvestment decisions obvious.",
  },
  {
    name: "Mehdi R.",
    role: "GM, RapidPharma",
    quote:
      "The logistics automation slashed delivery times to under 3 hours. Closing new pharmacies now feels like flipping a switch.",
  },
  {
    name: "Lamia S.",
    role: "Head of Growth, Solaria DZ",
    quote:
      "Transformational. Pipeline visibility and pricing guidance increased our service margins by 19% while reducing churn.",
  },
];

export function Testimonials() {
  return (
    <section className="card card--accent">
      <header className="card__header">
        <h2>Operators Already Growing with Agentic Systems</h2>
      </header>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonials__item">
            <p>“{testimonial.quote}”</p>
            <footer>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
