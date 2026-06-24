import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Trust } from '@/components/sections/trust';
import { Team } from '@/components/sections/team';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Trust />
      <Team />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}
