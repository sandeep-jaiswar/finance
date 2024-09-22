import { NextRequest, NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";
    const data = await yahooFinance.search(
      q,
      {
        lang: "en-US",
        region: "IN",
      },
      {
        validateResult: true,
      }
    );
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
