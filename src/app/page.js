import Banner from "@/components/Banner";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Wanderlust — Discover Your Next Adventure",
  description:
    "Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.",
};

export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturedDestinations />
      <WhyChoose />
      <Testimonials />
      <CtaSection />
    </main>
  );
}
