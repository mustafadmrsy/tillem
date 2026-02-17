import type { Metadata } from "next";

import { ContactClient } from "@/app/iletisim/contact-client";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Tillem Tekstil ile iletişime geçin. Denizli OSB adresi, telefon, e-posta ve iletişim formu.",
};

export default function ContactPage() {
  return <ContactClient />;
}
