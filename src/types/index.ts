export type ProductCategory =
  | "otel-tekstili"
  | "banket-catering"
  | "perde"
  | "ev-tekstili"
  | "kumaslar"
  | "restoran";

export interface Product {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  category: ProductCategory;
  description: string;
  descriptionEn?: string;
  shortDesc: string;
  shortDescEn?: string;
  images: string[];
  specs: { label: string; value: string }[];
  badge?: string;
  badgeEn?: string;
  featured?: boolean;
  tags?: string[];
  tagsEn?: string[];
}

export interface Category {
  id: ProductCategory;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  image: string;
  badge: string;
  badgeEn?: string;
  productCount: number;
  href: string;
}
