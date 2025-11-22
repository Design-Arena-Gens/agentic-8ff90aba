const questions = [
  {
    q: "How fast can the platform start producing returns?",
    a: "Implementation takes 3 focused weeks. Your profitability depends on execution, market demand, and cost control. The platform provides forecasts and guardrails but does not guarantee outcomes.",
  },
  {
    q: "Do I need a technical team?",
    a: "No. We provide pre-built automations, SOPs, and onboarding support so operators without engineering backgrounds can execute immediately.",
  },
  {
    q: "What revenue streams are included?",
    a: "High-margin product bundles, subscription maintenance, and logistics services tailored for the Algerian market with pricing denominated in dinars.",
  },
  {
    q: "How are profits tracked?",
    a: "Your sales, expenses, and reinvestment budgets sync into the daily profit tracker. Alerts fire whenever metrics drift outside your thresholds.",
  },
];

export function FAQ() {
  return (
    <section className="card">
      <header className="card__header">
        <h2>Answers Before You Launch</h2>
      </header>
      <div className="faq">
        {questions.map((entry) => (
          <details key={entry.q} className="faq__item">
            <summary>{entry.q}</summary>
            <p>{entry.a}</p>
          </details>
        ))}
      </div>
      <footer className="card__footer">
        <p>
          Profitability always depends on market conditions and operational
          discipline. Use our forecasting tools to stay informed and iterate
          weekly.
        </p>
      </footer>
    </section>
  );
}
