"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const AchievementsBanner = () => {
  const { spacing } = useBrand();
  const banner = spacing.sections.achievementsBanner;

  const [imageSrc, setImageSrc] = useState(
    "/assets/images/achievements/achievements.png"
  );

  useEffect(() => {
    const fetchBannerImage = async () => {
      try {
        const res = await fetch("/api/sheetData?sheet=achievementsPage");
        const data = await res.json();

        if (!Array.isArray(data)) return; // 🔒 IMPORTANT

        const bannerRow = data.find(
          (item: any) =>
            item.componentName === "AchievementsBanner_Image"
        );

        if (bannerRow?.value) {
          setImageSrc(bannerRow.value);
        }
      } catch (error) {
        console.error("Achievements banner load failed", error);
      }
    };

    fetchBannerImage();
  }, []);

  return (
    <section className={`w-full ${banner.sectionPadding}`}>
      <div className={`w-full relative overflow-hidden ${banner.heightClasses}`}>
        <Image
          src={imageSrc}
          alt="Achievements Banner"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    </section>
  );
};

export default AchievementsBanner;
