import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await db.products.findMany();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Error ao buscar os produtos do banco de dados" },
      { status: 500 },
    );
  }
}
