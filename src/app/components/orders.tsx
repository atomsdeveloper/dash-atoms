import React from "react";
import { getOrders } from "../actions/get-orders";
import { Order, OrderStatus } from "@prisma/client";

const Orders = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);

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
    <div>
      <h1 className="">Orders</h1>
      <p>
        {orders.map((order) => (
          <li key={order.id}>
            Pedido: {order.id} - {order.status} - R${order.total}
          </li>
        ))}
      </p>
    </div>
  );
};

export default Orders;
