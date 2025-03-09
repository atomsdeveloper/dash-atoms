"use server";

import { db } from "../../lib/prisma";

export const getOrders = async () => {
  try {
    const getOrders = await db.order.findMany({});
    if (!getOrders) {
      throw new Error("Not is possible get orders.");
    }

    return getOrders;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
