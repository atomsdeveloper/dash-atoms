import { useSearchParams } from "next/navigation";

import { Download } from "lucide-react";

import Orders from "./orders";
import Products from "./products";
import Sales from "./sales";
import TotalSales from "../dashboard/components/total-sales";
import TotalOrders from "../dashboard/components/total-orders";
import ProductsSales from "../dashboard/components/products-sold";
import Customers from "../dashboard/components/customers";
import { Button } from "@/components/ui/button";

const Content = () => {
  const viewer = useSearchParams().get("view");

  switch (viewer) {
    case "orders":
      return <Orders />;
    case "products":
      return <Products />;
    case "sales":
      return <Sales />;
    default:
      return (
        <>
          <div className="grid h-full w-full grid-cols-7 grid-rows-3 gap-4 p-2 pt-2">
            {/* Linha 1 */}
            <div className="col-span-7 grid grid-cols-7 gap-4">
              <div className="rounded- col-span-4 flex h-full flex-col items-center gap-3 rounded-md bg-white p-2">
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
                  <TotalSales />
                  <TotalOrders />
                  <ProductsSales />
                  <Customers />
                </div>
              </div>

              <div className="col-span-3 bg-blue-700 p-4">Item 1.2</div>
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
        </>
      );
  }
};

export default Content;
