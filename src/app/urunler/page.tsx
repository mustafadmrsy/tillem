import type { Metadata } from "next";

import { ProductsClient } from "@/app/urunler/products-client";
import { products } from "@/data/products";
import type { ProductCategory } from "@/types";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Otel & SPA, banket & catering, perde, ev tekstili, kumaş ve restoran tekstili ürünlerini keşfedin.",
};

export default function ProductsPage(props: {
  searchParams?: { cat?: string };
}) {
  const raw = props.searchParams?.cat;
  const allowed: Array<"all" | ProductCategory> = [
    "all",
    "otel-tekstili",
    "banket-catering",
    "perde",
    "ev-tekstili",
    "kumaslar",
    "restoran",
  ];
  const initialCat = (allowed.includes((raw ?? "all") as never)
    ? (raw ?? "all")
    : "all") as "all" | ProductCategory;

  return <ProductsClient products={products} initialCat={initialCat} />;
}
