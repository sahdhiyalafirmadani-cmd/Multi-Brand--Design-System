import HeaderTop from "@/components/navigation/HeaderTop";
import HeaderUpper from "@/components/navigation/HeaderUpper";
import Banner from "@/components/feedback/Banner";
import AboutSection from "@/components/Sections/AboutSection";
import ChairmanSection from "@/components/Sections/ChairmanSection";
import AchievementsSection from "@/components/Sections/AchievementsSection";
import ManagingDirectorSection from "@/components/Sections/ManagingDirectorSection";
import NoticeBoardSection from "@/components/Sections/NoticeBoardSection";
import MadamSection from "@/components/Sections/MadamSection";
import Footer from "@/components/Footer/Footer";





export default function HomePage() {
  return (
    <>
      
      <HeaderTop />
     <HeaderUpper />
     <Banner />
     <AboutSection />
     <ChairmanSection />
     <AchievementsSection />
     <ManagingDirectorSection />
     <NoticeBoardSection />
    <MadamSection />
    <Footer />

    
    </>
  );
}