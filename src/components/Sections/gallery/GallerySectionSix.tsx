"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const GallerySectionSix = () => {
  const { spacing, colors } = useBrand();

  // USE SAME SPACING AS OTHER GALLERY SECTIONS
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

      const newYearImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_NewYear_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

      const awardsDayImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_AwardsDay_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

      const alifianDayImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_AlifianDay_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

      setSubsections([
        {
          heading:
            data.find((i: any) => i.componentName === "Gallery_NewYear_Heading")
              ?.value || "New Year",
          images: newYearImages,
        },
        {
          heading:
            data.find((i: any) => i.componentName === "Gallery_AwardsDay_Heading")
              ?.value || "Awards Day",
          images: awardsDayImages,
        },
        {
          heading:
            data.find((i: any) => i.componentName === "Gallery_AlifianDay_Heading")
              ?.value || "Alifian Day",
          images: alifianDayImages,
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

export default GallerySectionSix;
