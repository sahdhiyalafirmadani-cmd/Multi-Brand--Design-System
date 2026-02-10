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

      const arabicDayImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_ArabicDay_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

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
            data.find((i: any) => i.componentName === "Gallery_ArabicDay_Heading")
              ?.value || "Arabic Day",
          images: arabicDayImages,
        },
        {
          heading:
            data.find((i: any) => i.componentName === "Gallery_Ifthar_Heading")
              ?.value || "Annual Ifthar",
          images: iftharImages,
        },
      ]);
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className={s.container}>
        {subsections.map((sub, idx) => (
          <div key={idx} className={s.subsectionWrapper}>
            
            {/* HEADING */}
            <h2 className={s.heading} style={{ color: c.heading }}>
              {sub.heading}
            </h2>

            {/* IMAGE ROW */}
            <div className={s.galleryWrapper}>
              {sub.images.map((img, i) => (
                <div key={i} className={s.imageOuter}>
                  <img
                    src={img}
                    alt={`${sub.heading} ${i + 1}`}
                    className={s.image}
                  />
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySectionOne;
