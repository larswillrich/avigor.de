import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import AvigorWay from "@/components/AvigorWay";
import Services from "@/components/Services";
import Founders from "@/components/Founders";
import Publications from "@/components/Publications";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <AvigorWay />
      <Services />
      <Founders />
      <Publications />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
