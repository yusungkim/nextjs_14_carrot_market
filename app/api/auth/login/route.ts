import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  console.log(request)

  return NextResponse.json({ status: 'ok' }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  console.log(data)
  return NextResponse.json(data, { status: 200 });
}