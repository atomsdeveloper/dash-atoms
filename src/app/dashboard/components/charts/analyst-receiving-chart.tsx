"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { DataContext } from "@/context/datas";

const chartConfig = {
  total: {
    label: "Pagos",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const AnalystReceivingChart = () => {
  const {
    months,
    orders,
  } = React.useContext(DataContext);
  
  // Criar um objeto base para armazenar os contadores de pagamentos
  const monthlyData: Record<string, { count: number }> = months.reduce((acc, month) => {
    acc[month] = { count: 0 };
    return acc;
  }, {} as Record<string, { count: number }>);
  
  // Processar os pedidos confirmados
  orders.filter((order) => {
    return order.status === "PAYMENT_CONFIRMED"
  }).forEach((order) => {
    const date = new Date(order.createdAt);
    const monthName = months[date.getMonth()]; // Obtém o nome do mês
  
    if (monthlyData[monthName]) {
      monthlyData[monthName].count++;
    }
  });
  
  // Transformar o objeto em um array para passar para o gráfico
  const chartData = Object.entries(monthlyData).map(([month, values]) => ({
    month,
    total: values.count
  }));

  const getMonthName = (monthIndex: number) => {
    const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    
    return months[monthIndex];
  };

  const calculateMonthlyChange = (chartData: { month: string; total: number }[]) => {
    const lastMonth = chartData.find((data) => data.month === getMonthName(new Date().getMonth()));
    const penultimateMonth = chartData.find((data) => data.month === getMonthName(new Date().getMonth() - 1));
  
    if (!lastMonth || !penultimateMonth || penultimateMonth.total === 0) {
      console.log("Dados do mês atual ou anterior não encontrados.");
      return { isDecreasing: false, percentageChange: 0 }; // Retorna valores padrão para evitar erro
    }
  
    const isDecreasing = lastMonth.total < penultimateMonth.total;
    const percentageChange = (penultimateMonth.total / lastMonth.total) * 100;
  
    return { isDecreasing, percentageChange: percentageChange.toFixed(2) };
  };
  
  // Chamando a função para obter os valores
  const { isDecreasing, percentageChange } = calculateMonthlyChange(chartData);


  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Análise de Recebimentos</CardTitle>
        <CardDescription>Recebimento Mensal</CardDescription>
      </CardHeader>
      <CardContent>
      <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="total"
              type="natural"
              stroke="#2662d9"
              strokeWidth={2}
              dot={{
                fill: "",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
          <div className="flex gap-2 font-medium leading-none">
            Recebidos deste mês com {isDecreasing ? "acréssimo" : "baixa"} de {percentageChange}%
            <TrendingUp className="h-4 w-4" 
          />
        </div>
        <div className="leading-none text-muted-foreground">
          Análise os valores recebidos mensalmente.
        </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
export default AnalystReceivingChart;