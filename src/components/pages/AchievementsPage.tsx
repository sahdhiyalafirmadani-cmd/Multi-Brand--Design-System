"use client";

import HeaderTop from "@/components/navigation/HeaderTop";
import HeaderUpper from "@/components/navigation/HeaderUpper";
import AchievementsBanner from "../Sections/achievements/AchievementsBanner";
import AcademicSection from "../Sections/achievements/AcademicSection";
import AchieversSection from "../Sections/achievements/AchieversSection";
import AthleticSection from "../Sections/achievements/AthleticSection";
import Footer from "../Footer/Footer";


export default function AchievementsPage() {
  return (
    <>
      {/* Shared Navigation */}
      <HeaderTop />
      <HeaderUpper />
      <AchievementsBanner />
      <AcademicSection />
      <AchieversSection />
      <AthleticSection />
      <Footer />
      
    
      
    </>
  );
}
