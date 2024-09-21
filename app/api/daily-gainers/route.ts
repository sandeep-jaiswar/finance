import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";
export async function GET(request: NextApiRequest) {
  try {
    const { queryOptions } = request.body;
    const data = await yahooFinance.dailyGainers(queryOptions);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
