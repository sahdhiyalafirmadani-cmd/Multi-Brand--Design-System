"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

interface SectionImages {
  heading: string;
  rows: string[][];
}

const GallerySectionThree = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.galleryIndependence;
  const c = colors.galleryIndependence;

  const [sections, setSections] = useState<SectionImages[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/sheetData?sheet=galleryPage");
        const data = await res.json();
        if (!Array.isArray(data)) return;

        const gallerySections = [
          {
            heading: data.find((i: any) => i.componentName === "Gallery_Independence_Section")?.value || "",
            rows: data
              .filter((i: any) => i.componentName === "Gallery_Independence_Images" && i.value)
              .map((i: any) =>
                (i.value as string)
                  .split("|")
                  .map((img: string) => img.trim())
                  .filter(Boolean)
              )
          },
          {
            heading: data.find((i: any) => i.componentName === "Gallery_Elocution_Section")?.value || "",
            rows: data
              .filter((i: any) => i.componentName === "Gallery_Elocution_Images" && i.value)
              .map((i: any) =>
                (i.value as string)
                  .split("|")
                  .map((img: string) => img.trim())
                  .filter(Boolean)
              )
          },
          {
            heading: data.find((i: any) => i.componentName === "Gallery_Founders_Section")?.value || "",
            rows: data
              .filter((i: any) => i.componentName === "Gallery_Founders_Images" && i.value)
              .map((i: any) =>
                (i.value as string)
                  .split("|")
                  .map((img: string) => img.trim())
                  .filter(Boolean)
              )
          },
             {
            heading: data.find((i: any) => i.componentName === "Gallery_StaffTrip_Section")?.value || "",
            rows: data
              .filter((i: any) => i.componentName === "Gallery_StaffTrip_Images" && i.value)
              .map((i: any) =>
                (i.value as string)
                  .split("|")
                  .map((img: string) => img.trim())
                  .filter(Boolean)
              )
          },
               {
            heading: data.find((i: any) => i.componentName === "Gallery_Csr_Section")?.value || "",
            rows: data
              .filter((i: any) => i.componentName === "Gallery_Csr_Images" && i.value)
              .map((i: any) =>
                (i.value as string)
                  .split("|")
                  .map((img: string) => img.trim())
                  .filter(Boolean)
              )
          },
        ];

        setSections(gallerySections);
      } catch (error) {
        console.error("Failed to fetch gallery data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      {sections.map((section, idx) => (
        <div key={idx} className="mb-8">
          {/* Section Heading */}
          <div className={s.headingWrapper}>
            <h2 className={s.headingSize} style={{ color: c.heading }}>
              {section.heading}
            </h2>
          </div>

          {/* Image Rows */}
          <div className={s.rowsWrapper}>
            {section.rows.map((row, rowIndex) => (
              <div key={rowIndex} className={s.scrollRow}>
                {row.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${section.heading} ${rowIndex + 1}-${imgIndex + 1}`}
                    className={s.image}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default GallerySectionThree;
