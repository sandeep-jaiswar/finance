import { NextRequest, NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";
export async function GET(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, queryOptions } = body;
    const data = await yahooFinance.insights(query, queryOptions);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
