// Este deverá ser um componente do lado do servidor onde será recebido de um Context as informações sobre as vendas e etc.

import {
  UserRoundPlus,
  ChartColumnIncreasing,
  FileChartColumnIncreasing,
  Tag,
} from "lucide-react";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import Summary from "../../components/summary";

const Leaderboard = () => {
  return (
    <div className="grid h-full w-full grid-cols-7 grid-rows-4 gap-4 p-2 pt-2 lg:grid-cols-7 lg:grid-rows-3">
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

          <div className="grid h-full w-full grid-cols-4 gap-2">
            {/* Sales */}
            <Summary
              bgColorDiv={`bg-red-200`}
              bgColorIcon={` bg-red-400`}
              icon={ChartColumnIncreasing}
              value={`7`}
              title={`New Sales`}
              desc={`+ 1 new sales today`}
            />

            {/* Orders */}
            <Summary
              bgColorDiv={`bg-orange-200`}
              bgColorIcon={` bg-orange-400`}
              icon={FileChartColumnIncreasing}
              value={`10`}
              title={`Total Orders`}
              desc={`+ 2 new orders today`}
            />

            {/* Products */}
            <Summary
              bgColorDiv={`bg-green-200`}
              bgColorIcon={` bg-green-400`}
              icon={Tag}
              value={`68`}
              title={`Products Sold`}
              desc={`+ 7 products today`}
            />

            {/* Custumers */}
            <Summary
              bgColorDiv={`bg-violet-200`}
              bgColorIcon={` bg-violet-400`}
              icon={UserRoundPlus}
              value={`10`}
              title={`New Custumers`}
              desc={`+ 8 new users today`}
            />
          </div>
        </div>

        <div className="col-span-7 bg-blue-700 p-4 lg:col-span-3">Item 1.2</div>
      </div>

      {/* Linha 2 */}
      <div className="col-span-7 grid grid-cols-7 gap-4">
        <div className="col-span-3 bg-green-500 p-4">Item 2.1</div>
        <div className="col-span-2 bg-green-700 p-4">Item 2.2</div>
        <div className="col-span-2 bg-green-900 p-4">Item 2.3</div>
      </div>
      {/* Linha 3 */}
      <div className="col-span-7 grid grid-cols-7 gap-4">
        <div className="col-span-3 bg-red-500 p-4">Item 2.1</div>
        <div className="col-span-2 bg-red-700 p-4">Item 2.2</div>
        <div className="col-span-2 bg-red-900 p-4">Item 2.3</div>
      </div>
    </div>
  );
};

export default Leaderboard;
