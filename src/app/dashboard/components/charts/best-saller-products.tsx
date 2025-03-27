"use client"

import React from "react";

import { DataContext, OrderProductWithName } from "@/context/datas";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const BestSallerProducts = () => {
    const {
      ordersProducts,
      products
    } = React.useContext(DataContext);

    // Armazena o novo array de produtos removendo os duplicados e adicionando quantidade
    const [bestSeller, setBestSeller] = React.useState<OrderProductWithName[]>([])

    // orderProducts -> array de objetos que contém todo o meus produtos vendidos
    ordersProducts.map((product) => {
      const existingProduct = bestSeller.find(best => best.productId === product.productId);

      if (existingProduct) {
          // Se já existe, soma a quantidade
          existingProduct.quantity += product.quantity;
      } else {
          // Se não existe, adiciona ao array retornando tudo que existe antes + o novo produto.
         setBestSeller(prev => [...prev, {...product}])
      }
    })

    const topFiveBestSeller: OrderProductWithName[] = bestSeller.sort((a, b) => b.quantity - a.quantity).slice(0, 5);

    return ( 
        <Card className="min-h-[373px]">
          <CardHeader>
            <CardTitle>Top Produtos</CardTitle>
            <CardDescription>Melhores produtos da loja.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">#</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Populariedade</TableHead>
                  <TableHead className="text-right">Vendas</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                    {topFiveBestSeller.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{`INV` + item.id.slice(0, 4).toUpperCase()}</TableCell>
                            <TableCell>{item?.Products?.name}</TableCell>
                            <TableCell>
                              <Progress value={((item.quantity / products.length) * 100)} />
                            </TableCell>
                            <TableCell className="text-right">
                              <Badge variant="outline">{((item.quantity / products.length) * 100).toFixed(0)}%</Badge>
                            </TableCell> 
                        </TableRow>
                    ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
     );
}
 
export default BestSallerProducts;