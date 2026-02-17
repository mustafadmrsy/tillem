import type { Metadata } from "next";

import { ProductsClient } from "@/app/urunler/products-client";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Otel & SPA, banket & catering, perde, ev tekstili, kumaş ve restoran tekstili ürünlerini keşfedin.",
};

export default function ProductsPage() {
  return <ProductsClient products={products} />;
}
