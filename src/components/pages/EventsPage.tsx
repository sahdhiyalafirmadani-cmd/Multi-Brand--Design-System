"use client";

import HeaderTop from "@/components/navigation/HeaderTop";
import HeaderUpper from "@/components/navigation/HeaderUpper";
import TermSection from "../Sections/events/TermSection";
import ExamsHolidaysSection from "../Sections/events/ExamsHolidaysSection";
import SeminarSection from "../Sections/events/SeminarSection";
import FieldTripsSection from "../Sections/events/FieldTripsSection";
import Footer from "../Footer/Footer";



export default function EventsPage() {
  return (
    <>
      {/* Shared Navigation */}
      <HeaderTop />
      <HeaderUpper />
      <TermSection />
      <ExamsHolidaysSection />
      <SeminarSection />
      <FieldTripsSection />
      <Footer />
      
      
      
    
      
    </>
  );
}
