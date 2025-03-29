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
    label: "Clientes",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const AnalystReceivingChart = () => {
  const {
    months,
    orders,
    monthlyDataCostumer,
    customers,
  } = React.useContext(DataContext);
  
  // Corrigir bug, ele repete o cpf se o mês for diferente. Se o cpf comprar mês passado e este mês ele será contado 2 vezes
  orders.forEach((order) => {
    const date = new Date(order.createdAt);
    const monthName = months[date.getMonth()];
  
    if (!monthlyDataCostumer[monthName]) {
      monthlyDataCostumer[monthName] = { count: 0, total: 0, cpfs: new Set() };
    }
  
    // Incrementa o total de clientes
    monthlyDataCostumer[monthName].count++;
  
    // Adiciona CPF ao Set para garantir unicidade
    monthlyDataCostumer[monthName].cpfs.add(order.customerCpf);
  });
  // Transformar o objeto em um array para passar para o gráfico
  const chartData = Object.entries(monthlyDataCostumer).map(([month, values]) => ({
    month,
    total: values.cpfs.size, // Total de CPFs únicos no mês
    count: values.count // Total de compras no mês
  }));
  
  console.log(chartData)

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Análise de Clientes</CardTitle>
        <CardDescription>Novos clientes por mês</CardDescription>
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
            Recebidos deste mês com
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