import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  try {
    const ordersProducts = await db.orderProduct.findMany({
      include: {
          Products: {
              select: {
                  name: true,
              },
          },
      },
  });
    return NextResponse.json(ordersProducts);
  } catch (error) {
    return NextResponse.json(
      { error: "Error ao buscar os produtos do banco de dados" },
      { status: 500 },
    );
  }
}
