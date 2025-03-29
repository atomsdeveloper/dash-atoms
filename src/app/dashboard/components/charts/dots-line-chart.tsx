"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Dot, Line, LineChart } from "recharts"

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

const chartData = [
  { month: '', clientes: 275 },
]

const chartConfig = {
  clientes: {
    label: "clientes",
    color: "hsl(var(--chart-2))",
  }
} satisfies ChartConfig

const DotsLineChartComponent = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Satisfação do Cliente</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="clientes"
                  hideLabel
                />
              }
            />
            <Line
              dataKey="clientes"
              type="natural"
              stroke="var(--color-visitors)"
              strokeWidth={2}
              dot={({ payload, ...props }) => {
                return (
                  <Dot
                    key={payload.month}
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill="var(--color-visitors)"
                    stroke="var(--color-visitors)"
                  />
                )
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Obteve um aumento na Satisfação do cliente em 5.6% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Análise a satisfação do cliente com os seus produtos.
        </div>
      </CardFooter>
    </Card>
  )
}
export default DotsLineChartComponent;