import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="animate-spin">
      <LoaderCircle size={30} />
    </div>
  );
};

export default Loading;
