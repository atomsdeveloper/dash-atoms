import { useSearchParams } from "next/navigation";

import Orders from "../orders/page";
import Products from "../products/page";
import Sales from "../sales/page";

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
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <div className="grid auto-rows-min gap-4 md:grid-cols-2">
              <div className="aspect-video rounded-xl bg-muted/100" />
              <div className="aspect-video rounded-xl bg-muted/100" />
              <div className="aspect-video rounded-xl bg-muted/100" />
              <div className="aspect-video rounded-xl bg-muted/100" />
            </div>
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/100" />
            <div className="aspect-video rounded-xl bg-muted/100" />
            <div className="aspect-video rounded-xl bg-muted/100" />
          </div>
        </>
      );
  }
};

export default Content;
