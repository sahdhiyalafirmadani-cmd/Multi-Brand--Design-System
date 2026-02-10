"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const GallerySectionFour = () => {
  const { spacing, colors } = useBrand();

  // IMPORTANT → use same spacing as section one
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

      const fieldTripImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_FieldTrip_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

      const teachersDayImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_TeachersDay_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

      const communityDayImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_CommunityDay_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

      const childrensDayImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_ChildrensDay_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

      setSubsections([
        {
          heading:
            data.find((i: any) => i.componentName === "Gallery_FieldTrip_Heading")
              ?.value || "Field Trip",
          images: fieldTripImages,
        },
        {
          heading:
            data.find((i: any) => i.componentName === "Gallery_TeachersDay_Heading")
              ?.value || "Teachers Day",
          images: teachersDayImages,
        },
        {
          heading:
            data.find((i: any) => i.componentName === "Gallery_CommunityDay_Heading")
              ?.value || "Community Day",
          images: communityDayImages,
        },
        {
          heading:
            data.find((i: any) => i.componentName === "Gallery_ChildrensDay_Heading")
              ?.value || "Children's Day",
          images: childrensDayImages,
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

export default GallerySectionFour;
