import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center mx-auto sm:px-10 px-5 overflow-hidden bg-black-100">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid/>
      </div>
    </main>
  );
}
