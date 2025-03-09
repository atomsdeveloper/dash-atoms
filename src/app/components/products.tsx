import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const CreateProduct = () => {
  return <h1>Criar Produto</h1>;
};

const ListProducts = () => {
  return <h1>Listar Produtos com opção de editar e apagar</h1>;
};

const Products = () => {
  const router = useRouter();
  const pathname = usePathname();
  const viewer = useSearchParams().get("view");

  const [activePage, setActivePage] = useState("create"); // Estado para controlar a página ativa

  const handleSetActivePage = (value: string) => {
    router.push(`${pathname}?view=${viewer}&${value}`);
    setActivePage(value);
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleSetActivePage("create")}>
          Criar Produto
        </button>
        <button onClick={() => handleSetActivePage("list")}>
          Listar Produtos
        </button>
      </nav>

      {activePage === "create" && <CreateProduct />}
      {activePage === "list" && <ListProducts />}
    </div>
  );
};

export default Products;
