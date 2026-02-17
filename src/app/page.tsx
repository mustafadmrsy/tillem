import { About } from "@/components/sections/About";
import { HomeTopCategories } from "@/components/sections/HomeTopCategories";
import { Process } from "@/components/sections/Process";
import { ProductTypes } from "@/components/sections/ProductTypes";
import { References } from "@/components/sections/References";

export default function Home() {
  return (
    <>
      <HomeTopCategories />
      <ProductTypes />
      <About />
      <Process />
      <References />
    </>
  );
}
