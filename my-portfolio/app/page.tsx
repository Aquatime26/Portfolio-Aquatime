import Header from "./components/Header";
import Banner from "./components/Banner";
import GeneralSkills from "./components/GeneralSkills";
import AboutMe from "./components/AboutMe";
import TechnicalSkills from "./components/TechnicalSkills";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <Banner />
      <GeneralSkills />
      <AboutMe />
      <TechnicalSkills />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  );
}