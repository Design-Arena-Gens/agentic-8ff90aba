"use client";

import { useMemo, useState } from "react";
import { fetcher } from "@/lib/fetcher";

type ProfitCalculatorProps = {
  baseCurrency?: string;
};

type ExchangePayload = {
  rateToDzd: number;
  timestamp: string;
};

export function ProfitCalculator({ baseCurrency = "USD" }: ProfitCalculatorProps) {
  const [price, setPrice] = useState(35);
  const [cost, setCost] = useState(18);
  const [volume, setVolume] = useState(120);
  const [exchange, setExchange] = useState<ExchangePayload | null>(null);

  const { grossRevenue, netProfit, marginPercent } = useMemo(() => {
    const unitMargin = price - cost;
    const gross = price * volume;
    const net = unitMargin * volume;
    const marginPct = price === 0 ? 0 : (unitMargin / price) * 100;
    return {
      grossRevenue: gross,
      netProfit: net,
      marginPercent: marginPct,
    };
  }, [price, cost, volume]);

  const dzdProfit = useMemo(() => {
    if (!exchange) {
      return null;
    }
    return Math.round(netProfit * exchange.rateToDzd).toLocaleString("en-DZ");
  }, [exchange, netProfit]);

  return (
    <section id="accelerator" className="card">
      <header className="card__header">
        <h2>Rapid Profit Calculator</h2>
        <button
          className="btn btn--small"
          type="button"
          onClick={async () => {
            const data = await fetcher<ExchangePayload>("/api/exchange");
            setExchange(data);
          }}
        >
          Sync DZD Rate
        </button>
      </header>
      <p className="card__intro">
        Model an offer in seconds. Set your unit economics, project daily sales,
        then convert profit into Algerian dinars to anchor your targets.
      </p>
      <div className="calculator">
        <div className="calculator__inputs">
          <label>
            Price per unit ({baseCurrency})
            <input
              type="number"
              value={price}
              min={1}
              onChange={(event) => setPrice(Number(event.target.value) || 0)}
            />
          </label>
          <label>
            Cost per unit ({baseCurrency})
            <input
              type="number"
              value={cost}
              min={0}
              onChange={(event) => setCost(Number(event.target.value) || 0)}
            />
          </label>
          <label>
            Units sold per day
            <input
              type="number"
              value={volume}
              min={1}
              onChange={(event) => setVolume(Number(event.target.value) || 0)}
            />
          </label>
        </div>
        <div className="calculator__results">
          <div>
            <span className="calculator__label">Gross revenue</span>
            <strong>
              {baseCurrency} {grossRevenue.toLocaleString("en-US")}
            </strong>
          </div>
          <div>
            <span className="calculator__label">Net profit</span>
            <strong>
              {baseCurrency} {netProfit.toLocaleString("en-US")}
            </strong>
            <small>{marginPercent.toFixed(1)}% margin</small>
          </div>
          <div>
            <span className="calculator__label">Net profit in DZD</span>
            <strong>
              {dzdProfit ? `DA ${dzdProfit}` : "Sync exchange rate"}
            </strong>
            {exchange ? (
              <small>Updated {new Date(exchange.timestamp).toLocaleString()}</small>
            ) : null}
          </div>
        </div>
      </div>
      <footer className="card__footer">
        <p>
          These estimates help you choose your daily KPIs. Always validate with
          real sales data and adjust for taxes, logistics, and marketing spend.
        </p>
      </footer>
    </section>
  );
}
