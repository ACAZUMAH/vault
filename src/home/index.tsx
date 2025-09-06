import { HeroSection } from "./components/hero";
import { Featured } from "./components/featured";
import { Delivery } from "./components/delivery";
import { Services } from "./components/services";
import { TrackDelivery } from "./components/TrackDelivery";
// import { NewsAndFaqs } from "./components/News-Faq";
import { ContactForm } from "./components/ContactForm";
import { Confidentiality } from "./components/Confidential";

export const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Featured />
      <Delivery />
      <Services />
      <TrackDelivery />
      {/* <NewsAndFaqs /> */}
      <ContactForm />
      <Confidentiality />
    </>
  );
};
