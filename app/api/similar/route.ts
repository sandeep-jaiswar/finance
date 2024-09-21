import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";
export async function GET(request: NextApiRequest) {
  try {
    const { symbol } = request.body;
    const data = await yahooFinance.recommendationsBySymbol(symbol);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
