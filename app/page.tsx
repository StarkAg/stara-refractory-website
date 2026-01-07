import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ManufacturingExcellence from '@/components/ManufacturingExcellence';
import CoreProducts from '@/components/CoreProducts';
import WhyChoose from '@/components/WhyChoose';
import CompanyProfile from '@/components/CompanyProfile';
import Philosophy from '@/components/Philosophy';
import ProductDetails from '@/components/ProductDetails';
import Industries from '@/components/Industries';
import QualityControl from '@/components/QualityControl';
import Commitment from '@/components/Commitment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white" id="home">
      <Navbar />
      <Hero />
      <ManufacturingExcellence />
      <WhyChoose />
      <CompanyProfile />
      <Philosophy />
      <CoreProducts />
      <ProductDetails />
      <Industries />
      <QualityControl />
      <Commitment />
      <Contact />
      <Footer />
      </main>
  );
}
