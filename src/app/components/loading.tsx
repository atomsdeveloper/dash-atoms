import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="animate-spin flex items-center justify-center w-full h-full">
      <LoaderCircle size={20} />
    </div>
  );
};

export default Loading;
