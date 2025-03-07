import { ChartColumnIncreasing } from "lucide-react";

const TotalSales = () => {
  return (
    <div className="flex aspect-video flex-col gap-1 rounded-xl bg-muted/50 bg-red-200 p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-400">
        <ChartColumnIncreasing size={18} color="white" />
      </div>
      <h1 className="text-2xl">R$1K</h1>
      <h3 className="opacity-70">Total Sales</h3>
      <span className="text-sm text-blue-800">+ R$100 vendidos hoje</span>
    </div>
  );
};

export default TotalSales;
