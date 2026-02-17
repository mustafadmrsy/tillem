import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "p1",
    slug: "otel-bornoz-premium",
    title: "Premium Otel Bornozu",
    titleEn: "Premium Hotel Bathrobe",
    category: "otel-tekstili",
    badge: "Bestseller",
    badgeEn: "Bestseller",
    featured: true,
    shortDesc: "Yüksek gramaj, yumuşak dokulu, uzun ömürlü otel bornozu.",
    shortDescEn: "High GSM, soft feel, long-lasting hotel bathrobe.",
    description:
      "Yoğun kullanıma uygun, yüksek emicilik ve dayanıklılık hedeflenerek üretilmiş premium otel bornozu. Kurumsal işletmelere özel ölçü, nakış ve logo uygulaması yapılabilir.",
    descriptionEn:
      "A premium hotel bathrobe designed for heavy use with high absorbency and durability. Custom sizing, embroidery and logo applications are available for corporate clients.",
    tags: ["Otel", "Bornoz", "Pamuk", "Kurumsal"],
    tagsEn: ["Hotel", "Bathrobe", "Cotton", "Corporate"],
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975958225-4a2ad0b63ef6?w=1600&q=80&auto=format&fit=crop",
    ],
    specs: [
      { label: "Kumaş", value: "%100 Pamuk" },
      { label: "Gramaj", value: "400-500 gsm" },
      { label: "Renk", value: "Beyaz / Krem" },
      { label: "Opsiyon", value: "Logo nakış" },
    ],
  },
  {
    id: "p2",
    slug: "otel-havlu-seti",
    title: "Otel Havlu Seti",
    titleEn: "Hotel Towel Set",
    category: "otel-tekstili",
    shortDesc: "El, yüz ve banyo havlusu seti — otel standardı kalite.",
    shortDescEn: "Hand, face and bath towels — hotel-grade quality.",
    description:
      "Farklı ölçülerde kombinlenebilen otel havlu seti. Yüksek emicilik, düşük tüylenme ve kolay bakım özellikleriyle profesyonel kullanıma uygundur.",
    descriptionEn:
      "A hotel towel set that can be combined in different sizes. Suitable for professional use with high absorbency, low linting and easy care.",
    badgeEn: "Corporate",
    tags: ["Otel", "Havlu", "Set"],
    tagsEn: ["Hotel", "Towel", "Set"],
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1600&q=80&auto=format&fit=crop",
    ],
    specs: [
      { label: "Kumaş", value: "%100 Pamuk" },
      { label: "Opsiyon", value: "Özel etiket" },
      { label: "Bakım", value: "Endüstriyel yıkamaya uygun" },
    ],
  },
  {
    id: "p3",
    slug: "banket-masa-ortusu",
    title: "Banket Masa Örtüsü",
    titleEn: "Banquet Tablecloth",
    category: "banket-catering",
    badge: "Kurumsal",
    badgeEn: "Corporate",
    shortDesc: "Etkinlik ve banketler için leke tutmayan, düzgün drape.",
    shortDescEn: "Stain-resistant, great drape for events and banquets.",
    description:
      "Banket ve etkinlik kullanımına uygun masa örtüsü. Drape kalitesi yüksek, ütü performansı iyi, farklı ölçü ve renk seçenekleriyle sunulur.",
    descriptionEn:
      "A tablecloth suitable for banquets and events. Great drape and ironing performance, available in various sizes and colors.",
    tags: ["Banket", "Kurumsal", "Masa Örtüsü"],
    tagsEn: ["Banquet", "Corporate", "Tablecloth"],
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=1600&q=80&auto=format&fit=crop",
    ],
    specs: [
      { label: "Kullanım", value: "Banket / Catering" },
      { label: "Opsiyon", value: "Ölçüye özel üretim" },
      { label: "Renk", value: "Kurumsal renkler" },
    ],
  },
  {
    id: "p4",
    slug: "blackout-perde",
    title: "Blackout Perde",
    titleEn: "Blackout Curtain",
    category: "perde",
    shortDesc: "Işık kesen blackout kumaş seçenekleriyle özel üretim perde.",
    shortDescEn: "Custom-made curtains with light-blocking blackout fabrics.",
    description:
      "Otel odaları ve yaşam alanları için ışık kesen blackout perde çözümleri. Kumaş seçimi, dikim tipi ve montaj aksesuarlarıyla uçtan uca hizmet.",
    descriptionEn:
      "Blackout curtain solutions for hotel rooms and living spaces. End-to-end service with fabric selection, sewing types and mounting accessories.",
    tags: ["Perde", "Blackout", "Ölçüye Özel"],
    tagsEn: ["Curtain", "Blackout", "Custom Size"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1600&q=80&auto=format&fit=crop",
    ],
    specs: [
      { label: "Kumaş", value: "Blackout" },
      { label: "Üretim", value: "Ölçüye özel" },
      { label: "Opsiyon", value: "Alev geciktirici" },
    ],
  },
  {
    id: "p5",
    slug: "nevresim-takimi-saten",
    title: "Saten Nevresim Takımı",
    titleEn: "Satin Duvet Set",
    category: "ev-tekstili",
    badge: "Yeni",
    badgeEn: "New",
    shortDesc: "Yumuşak dokulu, şık parlaklıkta saten nevresim.",
    shortDescEn: "Soft feel satin bedding with an elegant sheen.",
    description:
      "Ev koleksiyonları için tasarlanmış saten nevresim takımı. Konforu ve estetiği birlikte sunan, seçili renk paletleriyle üretilir.",
    descriptionEn:
      "A satin duvet set designed for home collections. Produced in selected color palettes, combining comfort and aesthetics.",
    tags: ["Ev", "Nevresim", "Saten"],
    tagsEn: ["Home", "Bedding", "Satin"],
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80&auto=format&fit=crop",
    ],
    specs: [
      { label: "Kumaş", value: "Pamuk saten" },
      { label: "Set", value: "Nevresim + çarşaf + yastık" },
      { label: "Renk", value: "Seçili" },
    ],
  },
  {
    id: "p6",
    slug: "jakar-kumas",
    title: "Jakar Kumaş",
    titleEn: "Jacquard Fabric",
    category: "kumaslar",
    shortDesc: "Desenli jakar dokuma kumaş — projelere özel seçenekler.",
    shortDescEn: "Patterned jacquard fabric — project-specific options.",
    description:
      "Kurumsal projeler için jakar dokuma kumaşlar. Desen, iplik ve gramaj seçenekleriyle ihtiyaca göre özelleştirilebilir.",
    descriptionEn:
      "Jacquard fabrics for corporate projects. Customizable according to your needs with pattern, yarn and GSM options.",
    tags: ["Kumaş", "Jakar", "Kurumsal"],
    tagsEn: ["Fabric", "Jacquard", "Corporate"],
    images: [
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80&auto=format&fit=crop",
    ],
    specs: [
      { label: "Tip", value: "Jakar" },
      { label: "Opsiyon", value: "Desen geliştirme" },
      { label: "Kullanım", value: "Perde / döşemelik" },
    ],
  },
];

export const productBySlug = new Map(products.map((p) => [p.slug, p] as const));
