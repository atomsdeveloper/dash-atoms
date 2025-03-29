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
  count: {
    label: "Vendidos",
    color: "hsl(var(--chart-1))",
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

  // A partir de monthlyData, podemos gerar o chartData
  const chartData = Object.entries(monthlyData).map(([month, values]) => ({
    month,
    count: 0,
  }));

  ordersProducts.map((product) => {
    // Certifique-se de que product.createdAt é um objeto Date
    const createdAtDate = new Date(product.createdAt).getMonth();
  
    // Verifique se a conversão foi bem-sucedida (data válida)
    if (!isNaN(createdAtDate)) {
      const productMonth = months[createdAtDate]; // Converte o número do mês para o nome
      const existingProduct = chartData.find(data => data.month === productMonth);
      
      if (existingProduct) {
        // Se o mês já existe, soma a quantidade
        existingProduct.count += product.quantity;
      } else {
        // Se o mês não existe, cria a entrada para o mês com a quantidade
        chartData.push({
          month: productMonth,
          count: product.quantity,
        });
      }
    } else {
      console.error(`Invalid date: ${product.createdAt}`);
    }
  });

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Balançemento de Produtos</CardTitle>
        <CardDescription>Total de produtos vendidos por mês.</CardDescription>
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
            <Bar dataKey="count" fill="#2662d9" radius={4} />
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