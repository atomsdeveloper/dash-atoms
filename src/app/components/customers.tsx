import { UserRoundPlus } from "lucide-react";

const Customers = () => {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-muted/50 bg-violet-200 p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-400">
        <UserRoundPlus size={18} color="white" />
      </div>
      <h1 className="text-lg">8</h1>
      <h3 className="text-sm opacity-70">New Customers</h3>
      <span className="text-xs text-blue-800">+ 1 new user today</span>
    </div>
  );
};

export default Customers;
