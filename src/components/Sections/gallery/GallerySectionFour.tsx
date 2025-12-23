"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const GallerySectionFour = () => {
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

     
     
      // field trip Images (SAFE FIX)
      const fieldTripImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_FieldTrip_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

      // Teachers Day Images (SAFE FIX)
      const teachersDayImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_TeachersDay_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

         // Community Day Images (SAFE FIX)
      const communityDayImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Gallery_CommunityDay_Image") &&
            typeof i.value === "string"
        )
        .map((i: any) => i.value);

         // Children's Day Images (SAFE FIX)
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
            data.find(
              (i: any) =>
                typeof i.componentName === "string" &&
                i.componentName === "Gallery_FieldTrip_Heading"
            )?.value || "Field Trip",
          images: fieldTripImages,
        },
        {
          heading:
            data.find(
              (i: any) =>
                typeof i.componentName === "string" &&
                i.componentName === "Gallery_TeachersDay_Heading"
            )?.value || "Teachers Day",
          images: teachersDayImages,
        },
        {
          heading:
            data.find(
              (i: any) =>
                typeof i.componentName === "string" &&
                i.componentName === "Gallery_CommunityDay_Heading"
            )?.value || "Community Day",
          images: communityDayImages,
        },
        {
          heading:
            data.find(
              (i: any) =>
                typeof i.componentName === "string" &&
                i.componentName === "Gallery_ChildrensDay_Heading"
            )?.value || "Children's Day",
          images: childrensDayImages,
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

export default GallerySectionFour;
