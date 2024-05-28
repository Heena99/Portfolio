import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center mx-auto sm:px-10 px-5 overflow-hidden bg-black-100">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid/>
        <Experiences/>
        <Projects/> 
        <Footer/>
      </div>
    </main>
  );
}
