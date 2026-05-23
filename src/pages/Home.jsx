import Hero from "../components/home/Hero";
import FeaturedReels from "../components/home/FeaturedReels";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import ServicesPreview from "../components/home/ServicesPreview";
import InstagramCTA from "../components/home/InstagramCTA";
import FinalCTA from "../components/home/FinalCTA";

import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>

      <Hero />

      <FeaturedReels />

      <WhyChooseUs />

      <Testimonials />

      <ServicesPreview />

      <InstagramCTA />

      <FinalCTA />

    </PageTransition>
  );
}