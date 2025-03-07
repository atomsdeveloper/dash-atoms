import { UserRoundPlus } from "lucide-react";

const Customers = () => {
  return (
    <div className="flex aspect-video flex-col gap-1 rounded-xl bg-muted/50 bg-violet-200 p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-400">
        <UserRoundPlus size={18} color="white" />
      </div>
      <h1 className="text-2xl">8</h1>
      <h3 className="opacity-70">New Customers</h3>
      <span className="text-sm text-blue-800">+ 1 novo usuário hoje</span>
    </div>
  );
};

export default Customers;
