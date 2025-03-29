import React from "react";

import {
  UserRoundPlus,
  ChartColumnIncreasing,
  FileChartColumnIncreasing,
  Tag,
  TrendingUp,
} from "lucide-react";

import { DataContext } from "@/context/datas";

import Summary from "../../components/summary";

import AnalystReceivingChart from "./charts/analyst-receiving-chart";
import BarChartComponent from "./charts/bar-chart";
import DotsLineChartComponent from "./charts/costumers";
import TooltipChartComponent from "./charts/tooltip-chart";
import PieChartComponent from "./charts/pie-chart";
import BestSallerProducts from "./charts/best-saller-products";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Leaderboard = () => {
  const {
    orders,
    customers,
    sales,
    salesToday,
    ordersToday,
    ordersProductsToday,
    totalProductsSales,
  } = React.useContext(DataContext);
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-1 flex gap-2 p-2 flex-wrap">
        <div className="w-full lg:w-4/6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Vendas</CardTitle>
              <CardDescription>Sumário de Vendas</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center md:flex-row gap-4">
              {/* Sales */}
              <Summary
                bgColorDiv={`bg-red-200`}
                bgColorIcon={` bg-red-400`}
                icon={ChartColumnIncreasing}
                data={sales}
                title={`Vendas`}
                desc={`+ ${salesToday} vendas hoje`}
              />

              {/* Orders */}
              <Summary
                bgColorDiv={`bg-orange-200`}
                bgColorIcon={` bg-orange-400`}
                icon={FileChartColumnIncreasing}
                data={orders}
                title={`Total de Pedidos`}
                desc={`+ ${ordersToday} pedidos hoje`}
              />

              {/* Products */}
              <Summary
                bgColorDiv={`bg-green-300`}
                bgColorIcon={`bg-green-500`}
                icon={Tag}
                data={totalProductsSales}
                title={`Produtos Vendidos`}
                desc={`+ ${ordersProductsToday} produtos hoje`}
              />

              {/* Custumers */}
              <Summary
                bgColorDiv={`bg-violet-200`}
                bgColorIcon={` bg-violet-400`}
                icon={UserRoundPlus}
                data={customers}
                title={`Clientes`}
                desc={`+ ${ordersToday} usuários hoje`}
              />
            </CardContent>
            <CardFooter className="pt-6">
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 font-medium leading-none">
                    Resumo de Desempenho da sua Loja <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2 leading-none text-muted-foreground">
                    Veja o total de vendas, pedidos e novos clientes em tempo real.
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full lg:flex-1">
         <AnalystReceivingChart/>
        </div>
      </div>
      <div className="flex-1 flex gap-2 p-2 flex-wrap">
        <div className="w-full lg:w-3/6"> 
          <BarChartComponent />
        </div>
        <div className="w-full lg:flex-1">
          <DotsLineChartComponent />
        </div>
      </div>
      <div className="flex-1 flex gap-2 p-2">
        <div className="w-full">
         <BestSallerProducts/>
        </div>
      </div>
      <div className="flex-1 flex gap-2 p-2 flex-wrap">
        <div className="w-full lg:w-2/6">
          <PieChartComponent/>
        </div>
        <div className="w-full lg:flex-1">
          <TooltipChartComponent />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
