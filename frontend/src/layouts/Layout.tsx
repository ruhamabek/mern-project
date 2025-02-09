import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};
const Layout: React.FC<Props> = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="flex-1 py-10 container mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
