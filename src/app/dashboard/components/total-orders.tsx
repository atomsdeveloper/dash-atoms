import { FileChartColumnIncreasing } from "lucide-react";

const TotalOrders = () => {
  return (
    <div className="flex aspect-video flex-col gap-1 rounded-xl bg-muted/50 bg-orange-200 p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400">
        <FileChartColumnIncreasing size={18} color="white" />
      </div>
      <h1 className="text-2xl">120</h1>
      <h3 className="opacity-70">Total Orders</h3>
      <span className="text-sm text-blue-800">+ 12 pedidos hoje</span>
    </div>
  );
};

export default TotalOrders;
