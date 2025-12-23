"use client";

import HeaderTop from "@/components/navigation/HeaderTop";
import HeaderUpper from "@/components/navigation/HeaderUpper";
import GallerySectionOne from "../Sections/gallery/GallerySectionOne";
import GallerySportsMeetSection from "../Sections/gallery/GallerySportsMeetSection";
import GallerySectionThree from "../Sections/gallery/GallerySectionThree";
import GallerySectionFour from "../Sections/gallery/GallerySectionFour";
import GallerySectionFive from "../Sections/gallery/GallerySectionFive";
import GallerySectionSix from "../Sections/gallery/GallerySectionSix";
import Footer from "../Footer/Footer";




export default function GalleryPage() {
  return (
    <>
      {/* Shared Navigation */}
      <HeaderTop />
      <HeaderUpper />
      <GallerySectionOne />
     <GallerySportsMeetSection />
     <GallerySectionThree />
     <GallerySectionFour />
     <GallerySectionFive />
     <GallerySectionSix />
     <Footer />
      
      
      
      
      
    
      
    </>
  );
}