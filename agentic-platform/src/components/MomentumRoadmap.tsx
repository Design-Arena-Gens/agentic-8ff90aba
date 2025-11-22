const milestones = [
  {
    title: "Day 1-3 · Offer Intelligence",
    items: [
      "Run customer discovery interviews using pre-built scripts",
      "Define irresistible core offer and rapid fulfilment guarantee",
      "Publish landing page with automated lead capture",
    ],
  },
  {
    title: "Day 4-10 · Distribution & Sales",
    items: [
      "Launch paid acquisition in Facebook, TikTok, and marketplace listings",
      "Deploy AI-driven follow-up sequences via WhatsApp and email",
      "Close first 20 customers with down payments collected automatically",
    ],
  },
  {
    title: "Day 11-21 · Delivery Systems",
    items: [
      "Onboard fulfilment partners with service-level dashboards",
      "Track unit economics daily with auto-generated P&L reports",
      "Upsell high-margin add-ons based on usage scoring",
    ],
  },
  {
    title: "Day 22-60 · Scale & Optimize",
    items: [
      "Reinvest 35% of net profit into acquisition loops",
      "Hire commission-based closers and QA process ownership",
      "Expand to adjacent cities with localized pricing",
    ],
  },
];

export function MomentumRoadmap() {
  return (
    <section className="card">
      <header className="card__header">
        <h2>60-Day Momentum Roadmap</h2>
        <p>Work in focused sprints with measurable outputs and guardrails.</p>
      </header>
      <div className="roadmap">
        {milestones.map((milestone) => (
          <article key={milestone.title} className="roadmap__item">
            <h3>{milestone.title}</h3>
            <ul>
              {milestone.items.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
