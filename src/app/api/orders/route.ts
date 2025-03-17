import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  try {
    const orders = await db.order.findMany();
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json(
      { error: "Error ao buscar os pedidos do banco de dados" },
      { status: 500 },
    );
  }
}
