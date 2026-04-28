import Header from "@/components/flux/Header";
import Hero from "@/components/flux/Hero";
import Clients from "@/components/flux/Clients";
import About from "@/components/flux/About";
import Services from "@/components/flux/Services";
import Solutions from "@/components/flux/Solutions";
import Coverage from "@/components/flux/Coverage";
import CTA from "@/components/flux/CTA";
import Footer from "@/components/flux/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Solutions />
      <Coverage />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
