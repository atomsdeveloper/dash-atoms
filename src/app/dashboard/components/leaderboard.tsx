import {
  UserRoundPlus,
  ChartColumnIncreasing,
  FileChartColumnIncreasing,
  Tag,
} from "lucide-react";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import Summary from "../../components/summary";
import { DataContext } from "@/context/datas";

import React from "react";
import { dataSimpleLineChart } from "@/helpers/data-charts";
import LineChartComponent from "./charts/line-chart";
import BarChartComponent from "./charts/bar-chart";
import DotsLineChartComponent from "./charts/dots-line-chart";
import TooltipChartComponent from "./charts/tooltip-chart";
import PieChartComponent from "./charts/pie-chart";

const Leaderboard = () => {
  const {
    orders,
    ordersProducts,
    customers,
    sales,
    salesToday,
    ordersToday,
    ordersProductsToday,
  } = React.useContext(DataContext);
  return (
    <div className="grid-rows-auto grid h-full w-full grid-cols-7 gap-4 p-2 pt-2 lg:grid-cols-7 lg:grid-rows-3">
      {/* Linha 1 */}
      <div className="col-span-7 grid w-full gap-4 lg:grid-cols-7">
        <div className="col-span-7 flex h-full w-full flex-col items-center gap-3 rounded-lg bg-white p-2 lg:col-span-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-sm">Today´s Sales</h1>
              <span className="text-xs text-muted-foreground">
                Sales Summery
              </span>
            </div>

            <Button className="flex items-center gap-2 rounded-sm">
              <p className="text-sm">Export</p>
              <Download size={14} />
            </Button>
          </div>

          <div className="grid h-full w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center gap-2">
            {/* Sales */}
            <Summary
              bgColorDiv={`bg-red-200`}
              bgColorIcon={` bg-red-400`}
              icon={ChartColumnIncreasing}
              data={sales}
              title={`New Sales`}
              desc={`+ ${salesToday} sales today`}
            />

            {/* Orders */}
            <Summary
              bgColorDiv={`bg-orange-200`}
              bgColorIcon={` bg-orange-400`}
              icon={FileChartColumnIncreasing}
              data={orders}
              title={`Total Orders`}
              desc={`+ ${ordersToday} orders today`}
            />

            {/* Products */}
            <Summary
              bgColorDiv={`bg-green-200`}
              bgColorIcon={` bg-green-400`}
              icon={Tag}
              data={ordersProducts}
              title={`Products Sold`}
              desc={`+ ${ordersProductsToday} products today`}
            />

            {/* Custumers */}
            <Summary
              bgColorDiv={`bg-violet-200`}
              bgColorIcon={` bg-violet-400`}
              icon={UserRoundPlus}
              data={customers}
              title={`New Custumers`}
              desc={`+ ${ordersToday} users today`}
            />
          </div>
        </div>

        {/* <div className="col-span-7 h-auto items-center rounded-lg bg-white p-4 lg:col-span-3"> */}
          <LineChartComponent />
        {/* </div> */}
      </div>

      {/* Linha 2 */}
      <div className="col-span-7 grid gap-4 lg:grid-cols-7">
        <div className="col-span-7 p-4 lg:col-span-3">
          <BarChartComponent />
        </div>
        <div className="col-span-3 p-4 lg:col-span-2">
          <DotsLineChartComponent />
        </div>
        <div className="col-span-4 p-4 lg:col-span-2">
          <BarChartComponent />
        </div>
      </div>
      {/* Linha 3 */}
      <div className="col-span-7 grid gap-4 lg:grid-cols-7">
        <div className="col-span-4 p-4 lg:col-span-2">
          <TooltipChartComponent />
        </div>
        <div className="col-span-3 p-4 lg:col-span-2">
          <PieChartComponent/>
        </div>
        <div className="col-span-7 bg-red-500 p-4 lg:col-span-3">Item 2.1</div>
      </div>
    </div>
  );
};

export default Leaderboard;
