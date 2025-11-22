import { fetchUsdToDzd } from "@/lib/exchange";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetchUsdToDzd();
  return NextResponse.json({ rateToDzd: data.rateToDzd, timestamp: data.timestamp });
}
