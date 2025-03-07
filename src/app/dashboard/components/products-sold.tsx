import { Tag } from "lucide-react";

const ProductsSales = () => {
  return (
    <div className="flex aspect-video flex-col gap-1 rounded-xl bg-green-200 bg-muted/50 p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400">
        <Tag size={18} color="white" />
      </div>
      <h1 className="text-2xl">68</h1>
      <h3 className="opacity-70">Products Sold</h3>
      <span className="text-sm text-blue-800">+ 7 produtos vendidos hoje</span>
    </div>
  );
};

export default ProductsSales;
