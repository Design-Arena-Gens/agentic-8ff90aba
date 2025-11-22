const automations = [
  {
    name: "Lead-to-Closing Engine",
    description:
      "Qualifies leads with triage questionnaire, assigns urgency scores, and books appointments.",
    metrics: "Avg. 42% lead-to-sale conversion",
    stack: ["Typeform", "HubSpot", "WhatsApp Business API"],
  },
  {
    name: "Supply Chain Pulse",
    description:
      "Tracks inventory across suppliers, auto-reorders top SKUs, and notifies when margins dip.",
    metrics: "Cuts stock-outs by 68%",
    stack: ["Airtable", "Make", "Google Sheets", "SMS"],
  },
  {
    name: "Finance Guardrails",
    description:
      "Consolidates sales, expenses, and tax provisions into a rolling cash forecast with alerts.",
    metrics: "Forecast accuracy ±4.5%",
    stack: ["QuickBooks", "Retool", "Slack", "Firebase"],
  },
];

export function AutomationPipelines() {
  return (
    <section className="card">
      <header className="card__header">
        <h2>Automation Pipelines Included</h2>
        <p>Deploy pre-integrated workflows to protect margins and scale faster.</p>
      </header>
      <div className="pipelines">
        {automations.map((automation) => (
          <article key={automation.name} className="pipelines__item">
            <h3>{automation.name}</h3>
            <p>{automation.description}</p>
            <p className="pipelines__metric">{automation.metrics}</p>
            <div className="pipelines__stack">
              {automation.stack.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
