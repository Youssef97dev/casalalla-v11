import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SlideImages from "@/components/SlideImages";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <SlideImages />
      <Activities />
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
}
