import { AutomationPipelines } from "@/components/AutomationPipelines";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { MomentumRoadmap } from "@/components/MomentumRoadmap";
import { OpportunityTable } from "@/components/OpportunityTable";
import { ProfitCalculator } from "@/components/ProfitCalculator";
import { Testimonials } from "@/components/Testimonials";
import { fetchUsdToDzd } from "@/lib/exchange";
import styles from "./page.module.css";

export default async function Home() {
  const exchange = await fetchUsdToDzd();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero exchangeRate={exchange.rateToDzd} />
        <ProfitCalculator />
        <OpportunityTable averageTicket={9500} />
        <MomentumRoadmap />
        <AutomationPipelines />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
    </div>
  );
}
