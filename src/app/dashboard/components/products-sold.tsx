import { Tag } from "lucide-react";

const ProductsSales = () => {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-green-300 p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
        <Tag size={18} color="white" />
      </div>
      <h1 className="text-lg">68</h1>
      <h3 className="text-sm opacity-70">Products Sold</h3>
      <span className="text-xs text-blue-800">+ 7 products today</span>
    </div>
  );
};

export default ProductsSales;
