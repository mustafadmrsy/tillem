import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetailClient } from "./product-detail-client";
import { products, productBySlug } from "@/data/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug.get(slug);
  if (!product) return { title: "Ürün" };

  return {
    title: product.title,
    description: product.shortDesc,
    alternates: {
      canonical: `/urunler/${product.slug}`,
    },
    openGraph: {
      title: product.title,
      description: product.shortDesc,
      images: [product.images[0]],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.shortDesc,
      images: [product.images[0]],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productBySlug.get(slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
