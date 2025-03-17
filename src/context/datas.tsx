"use client";

import { Order, OrderProduct } from "@prisma/client";
import React, { createContext, useEffect, useState } from "react";

interface Customer {
  customerCpf: string;
}

export interface IDataContext {
  ordersProductsToday: number;
  ordersToday: number;
  salesToday: number;
  sales: Order[];
  customers: Customer[];
  ordersProducts: OrderProduct[];
  orders: Order[];
  handleSetOrders: (orders: Order[]) => void;
  handleSetOrdersProducts: (ordersProducts: OrderProduct[]) => void;
}

export const DataContext = createContext<IDataContext>({
  ordersProductsToday: 0,
  ordersToday: 0,
  salesToday: 0,
  sales: [],
  customers: [],
  ordersProducts: [],
  orders: [],
  handleSetOrders: () => {},
  handleSetOrdersProducts: () => {},
});

interface DataProps {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: DataProps) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersProducts, setOrdersProducts] = useState<OrderProduct[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [sales, setSales] = useState<Order[]>([]);

  const [salesToday, setSalesToday] = useState<number>(0);
  const [ordersToday, setOrdersToday] = useState<number>(0);
  const [ordersProductsToday, setOrdersProductsToday] = useState<number>(0);

  const fetchData = async () => {
    try {
      const [ordersResponse, ordersProductsResponse] = await Promise.all([
        fetch("/api/orders"),
        fetch("/api/orders-products"),
      ]);

      const [orders, ordersProducts]: [Order[], OrderProduct[]] =
        await Promise.all([
          ordersResponse.json(),
          ordersProductsResponse.json(),
        ]);

      setOrders(orders);
      setOrdersProducts(ordersProducts);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const uniqueCpfs = [
      ...new Set(orders.map((order) => order.customerCpf)),
    ].map((cpf) => ({ customerCpf: cpf })); // Criar objetos Customer a partir dos CPFs únicos

    const sales = orders.filter(
      (order) => order.status === "PAYMENT_CONFIRMED",
    );

    // Contar vendas feitas hoje
    let countSalesToday = 0;

    sales.forEach((sale) => {
      const saleDate = new Date(sale.createdAt);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (saleDate.setHours(0, 0, 0, 0) === today.getTime()) {
        countSalesToday += 1;
      }
    });

    // Contar pedidos feitos hoje
    let countOrdersToday = 0;

    orders.forEach((order) => {
      const orderDate = new Date(order.createdAt);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (orderDate.setHours(0, 0, 0, 0) === today.getTime()) {
        countOrdersToday += 1;
      }
    });

    // Contar produtos vendidos hoje
    let countOrdersProductsToday = 0;

    ordersProducts.forEach((product) => {
      const orderDate = new Date(product.createdAt);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (orderDate.setHours(0, 0, 0, 0) === today.getTime()) {
        countOrdersProductsToday += 1;
      }
    });

    setOrdersToday(countOrdersToday);
    setOrdersProductsToday(countOrdersProductsToday);
    setSalesToday(countSalesToday);

    setSales(sales);
    setCustomers(uniqueCpfs);
  }, [orders]);

  return (
    <DataContext.Provider
      value={{
        sales,
        salesToday,
        customers,
        orders,
        ordersToday,
        ordersProducts,
        ordersProductsToday,
        handleSetOrders: setOrders,
        handleSetOrdersProducts: setOrdersProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
