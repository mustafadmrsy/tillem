import { About } from "@/components/sections/About";
import { Categories } from "@/components/sections/Categories";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { References } from "@/components/sections/References";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <About />
      <Process />
      <References />
    </>
  );
}
