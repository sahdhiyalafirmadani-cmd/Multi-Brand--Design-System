"use client";

import HeaderTop from "@/components/navigation/HeaderTop";
import HeaderUpper from "@/components/navigation/HeaderUpper";
import ContactBanner from "../Sections/contact/ContactBanner";
import ContactSections from "../Sections/contact/ContactSections";
import ContactFormMap from "../Sections/contact/ContactFormMap";
import Footer from "../Footer/Footer";





export default function ContactPage() {
  return (
    <>
      {/* Shared Navigation */}
      <HeaderTop />
      <HeaderUpper />
      <ContactBanner />
      <ContactSections />
      <ContactFormMap />
      <Footer />
      
      
      
      
    
      
    </>
  );
}
