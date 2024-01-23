import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';
export default async function Cart({ params }) {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

  return NextResponse.json({ rows }, { status: 200 });
}