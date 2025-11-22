import { convertMarginToDzd, opportunities } from "@/lib/opportunities";

type OpportunityTableProps = {
  averageTicket: number;
};

export function OpportunityTable({ averageTicket }: OpportunityTableProps) {
  return (
    <section id="playbooks" className="card">
      <header className="card__header">
        <h2>Validated Opportunity Playbooks</h2>
        <p>
          Blend high-margin offers with proven demand. Each playbook includes
          execution milestones so you can launch inside 14 days.
        </p>
      </header>
      <div className="opportunity-table">
        <div className="opportunity-table__head">
          <span>Opportunity</span>
          <span>Daily profit (est.)</span>
          <span>Investment</span>
          <span>Focus region</span>
          <span>Execution sprints</span>
        </div>
        {opportunities.map((item) => {
          const estimatedDaily = convertMarginToDzd(
            averageTicket,
            item.expectedMargin,
            item.dailyVolume,
          );
          return (
            <div key={item.id} className="opportunity-table__row">
              <div>
                <strong>{item.title}</strong>
                <p>{item.summary}</p>
              </div>
              <div>
                <p className="opportunity-table__metric">
                  DA {Math.round(estimatedDaily).toLocaleString("en-DZ")}
                </p>
                <small>{Math.round(item.expectedMargin * 100)}% margin target</small>
              </div>
              <div>
                <p>
                  DA {item.investment.min.toLocaleString("en-DZ")} – DA{" "}
                  {item.investment.max.toLocaleString("en-DZ")}
                </p>
              </div>
              <div>
                <p>{item.regionFocus}</p>
              </div>
              <ul>
                {item.executionSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
