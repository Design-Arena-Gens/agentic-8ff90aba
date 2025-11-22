import Link from "next/link";

type HeroProps = {
  exchangeRate: number;
};

export function Hero({ exchangeRate }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Agentic Profit Engine for Algeria</h1>
        <p>
          Deploy a revenue-first operating system that plans, tracks, and
          optimises cashflow in Algerian dinars from day one. Automations help
          you land clients, price intelligently, and reinvest profits with
          confidence.
        </p>
        <div className="hero__stats">
          <div>
            <span className="hero__label">USD → DZD</span>
            <strong>{exchangeRate.toFixed(2)}</strong>
            <span className="hero__sublabel">live market rate</span>
          </div>
          <div>
            <span className="hero__label">90-day plan</span>
            <strong>DA 4.2M+</strong>
            <span className="hero__sublabel">target cumulative profit</span>
          </div>
          <div>
            <span className="hero__label">Automation</span>
            <strong>18 workflows</strong>
            <span className="hero__sublabel">pre-built for launch</span>
          </div>
        </div>
        <div className="hero__actions">
          <Link className="btn btn--primary" href="#accelerator">
            Launch Profit Accelerator
          </Link>
          <Link className="btn btn--ghost" href="#playbooks">
            View Opportunity Playbooks
          </Link>
        </div>
      </div>
      <div className="hero__card">
        <div className="hero__card-header">
          <span>Daily Profit Tracker</span>
          <span className="hero__badge">Auto-sync</span>
        </div>
        <div className="hero__card-body">
          <div className="hero__metric">
            <span>Revenue Today</span>
            <strong>DA 182,500</strong>
            <small>+12.4% vs. 7-day avg</small>
          </div>
          <div className="hero__metric">
            <span>Net Profit</span>
            <strong>DA 62,210</strong>
            <small>after reinvestment</small>
          </div>
        </div>
        <div className="hero__card-footer">
          <span>66% capacity remaining · next action: upsell logistics addon</span>
        </div>
      </div>
    </section>
  );
}
