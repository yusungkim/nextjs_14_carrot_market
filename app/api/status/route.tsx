import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // get the values of the name and age parameters
  const from = searchParams.get('from');

  if (from) {
    console.log("/api/status called by", from.toString().trim().slice(0, 14))
  }

  return NextResponse.json({ status: 'ok' }, { status: 200 });
}