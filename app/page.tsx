import { About } from "@/components/About";
import { BookBanner } from "@/components/BookBanner";
import { CareHighlights } from "@/components/CareHighlights";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { InstagramShowcase } from "@/components/InstagramShowcase";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Services } from "@/components/Services";
import { Staff } from "@/components/Staff";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CareHighlights />
        <About />
        <Services />
        <Staff />
        <Gallery />
        <InstagramShowcase />
        <Testimonials />
        <BookBanner />
        <Location />
      </main>
      <Footer />
    </>
  );
}
