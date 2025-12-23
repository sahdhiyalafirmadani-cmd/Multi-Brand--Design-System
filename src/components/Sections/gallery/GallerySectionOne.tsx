"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const GallerySectionOne = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.gallerySectionOne;
  const c = colors.gallerySectionOne;

  
  const [subsections, setSubsections] = useState<
    { heading: string; images: string[] }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=galleryPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      

      // Arabic Day Images (SAFE FIX)
      const arabicDayImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_ArabicDay_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

      // Ifthar Images (SAFE FIX)
      const iftharImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_Ifthar_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

      setSubsections([
        {
          heading:
            data.find(
              (i: any) =>
                typeof i.componentName === "string" &&
                i.componentName === "Gallery_ArabicDay_Heading"
            )?.value || "Arabic Day",
          images: arabicDayImages,
        },
        {
          heading:
            data.find(
              (i: any) =>
                typeof i.componentName === "string" &&
                i.componentName === "Gallery_Ifthar_Heading"
            )?.value || "Annual Ifthar",
          images: iftharImages,
        },
      ]);
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      
     

      {/* Subsections */}
      {subsections.map((sub, idx) => (
        <div key={idx} className="mb-8">
          <h2 className={`${s.headingSize} mb-4`} style={{ color: c.heading }}>
            {sub.heading}
          </h2>

          <div className={s.galleryWrapper}>
            {sub.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${sub.heading} ${i + 1}`}
                className={s.imageWrapper}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default GallerySectionOne;
