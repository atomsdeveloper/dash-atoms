import { useSearchParams } from "next/navigation";

import Orders from "./orders";
import Products from "./products";
import Sales from "./sales";

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
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
              <div className="aspect-video rounded-xl bg-muted/50 p-1">
                Teste 1
              </div>
              <div className="aspect-video rounded-xl bg-muted/50 p-1">
                Teste 2
              </div>
              <div className="aspect-video rounded-xl bg-muted/50 p-1">
                Teste 3
              </div>
              <div className="aspect-video rounded-xl bg-muted/50 p-1">
                Teste 4
              </div>
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 p-1 md:min-h-min">
              Teste 5
            </div>
          </div>
        </>
      );
  }
};

export default Content;
