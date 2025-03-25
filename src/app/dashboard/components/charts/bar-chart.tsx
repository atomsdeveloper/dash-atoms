"use client"

import React from "react"

import { TrendingUp } from "lucide-react"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { DataContext } from "@/context/datas"

const chartConfig = {
  bigger: {
    label: "Mais Vendidos",
    color: "hsl(var(--chart-1))",
  },
  small: {
    label: "Menos Vendidos",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const BarChartComponent = () => {
  const {
    months,
    ordersProducts,
  } = React.useContext(DataContext);  
  
  // Criar um objeto base para armazenar os contadores de número de vendas por produto.
  const monthlyData: Record<string, { bigger: number, small: number }> = months.reduce((acc, month) => {
    acc[month] = { bigger: 0, small: 0 };
    return acc;
  }, {} as Record<string, { bigger: number, small: number }>);
  
  // Transformar o objeto em um array para passar para o gráfico
  const chartData = Object.entries(monthlyData).map(([month, values]) => ({
    month,
    bigger: values.bigger,
    small: values.small,
  }));
    
  
    
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Balançemento de Produtos</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="bigger" fill="#80affd" radius={4} />
            <Bar dataKey="small" fill="#2662d9" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
         Análise os produtos mais vendidos e os menos vendidos no ano. <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
export default BarChartComponent;