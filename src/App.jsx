import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import HighlightText from './components/HighlightText';
import ProductSection from './components/ProductSection';
import SecretConsultancy from './components/SecretConsultancy';
import IngredientsSection from './components/IngredientsSection';
import Licenses from './components/Licenses';
import ContactSection from './components/ContactSection';
import {
  WhyChoose,
  WhyItWorks,
  Highlights,
  Delivery,
  Dosage,
  FAQ,
} from './components/InfoSections';
import ReviewSection from './components/ReviewSection';
import BuySection from './components/BuySection';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <HighlightText />
      <SecretConsultancy />
      <ProductSection />
      <IngredientsSection />
      <Licenses />
      <ContactSection />
      <WhyChoose />
      <WhyItWorks />
      <Highlights />
      <Delivery />
      <Dosage />
      <ReviewSection />
      <FAQ />
      {/* <SecretConsultancy /> */}
      <BuySection />
      <Footer />
      <FloatingButtons />
    </>
  );
}

