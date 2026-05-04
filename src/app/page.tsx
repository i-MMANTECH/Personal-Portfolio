import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Stack } from "@/sections/Stack";
import { Experience } from "@/sections/Experience";
import { FeaturedWork } from "@/sections/FeaturedWork";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Experience />
        <FeaturedWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
