import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { SmileTransformation } from '../components/SmileTransformation';
import { Testimonials } from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <SmileTransformation />
      <Testimonials />
    </>
  );
}
