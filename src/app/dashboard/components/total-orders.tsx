import { getOrders } from "@/app/actions/get-orders";
import { Order } from "@prisma/client";
import { FileChartColumnIncreasing } from "lucide-react";
import React from "react";

const TotalOrders = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);

  const ordersDay = orders.filter((order) => {
    const today = new Date();

    return today === order.createdAt;
  });

  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex aspect-video flex-col gap-1 rounded-xl bg-muted/50 bg-orange-200 p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400">
        <FileChartColumnIncreasing size={18} color="white" />
      </div>
      <h1 className="text-2xl">{orders.length}</h1>
      <h3 className="opacity-70">Total Orders</h3>
      <span className="text-sm text-blue-800">
        + {ordersDay.length} pedidos hoje
      </span>
    </div>
  );
};

export default TotalOrders;
