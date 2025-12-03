"use client";

import HeaderTop from "@/components/navigation/HeaderTop";
import HeaderUpper from "@/components/navigation/HeaderUpper";
import AboutBanner from "../Sections/about/AboutBanner";
import HistorySection from "../Sections/about/HistorySection";
import HistoryMontessoriSection from "../Sections/about/HistoryMontessoriSection";
import OurValuesSection from "../Sections/about/OurValuesSection";
import BuildingCommitteeSection from "../Sections/about/BuildingCommitteeSection";
import FoundingDirectorSection from "../Sections/about/FoundingDirectorSection";
import FinanceDirectorSection from "../Sections/about/FinanceDirectorSection";
import Footer from "../Footer/Footer";


export default function AboutPage() {
  return (
    <>
      {/* Shared Navigation */}
      <HeaderTop />
      <HeaderUpper />
      <AboutBanner />
      <HistorySection />
      <HistoryMontessoriSection />
      <OurValuesSection />
      <BuildingCommitteeSection />
      <FoundingDirectorSection />
      <FinanceDirectorSection />
      <Footer />
      
    
      
    </>
  );
}
