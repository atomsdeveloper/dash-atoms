import { useSearchParams } from "next/navigation";

import Orders from "./orders";
import Products from "./products";
import Sales from "./sales";
import Leaderboard from "./leaderboard";

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
      return <Leaderboard />;
  }
};

export default Content;
