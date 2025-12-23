"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const GallerySportsMeetSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.gallerySportsMeet;
  const c = colors.gallerySportsMeet;

  const [heading, setHeading] = useState("");
  const [imageRows, setImageRows] = useState<string[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/sheetData?sheet=galleryPage");
        const data = await res.json();
        if (!Array.isArray(data)) return;

        // Heading
        setHeading(
          data.find((i: any) => i.componentName === "Gallery_SportsMeet_Section")
            ?.value || ""
        );

        // Map images safely
        const rows = data
          .filter(
            (i: any) =>
              i.componentName === "Gallery_SportsMeet_Images" && i.value
          )
          .map((i: any) =>
            (i.value as string)
              .split("|")
              .map((img: string) => img.trim())
              .filter((img: string) => img.length > 0)
          );

        setImageRows(rows);
      } catch (error) {
        console.error("Failed to fetch gallery data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      {/* Heading */}
      <div className={s.headingWrapper}>
        <h1 className={s.headingSize} style={{ color: c.heading }}>
          {heading}
        </h1>
      </div>

      {/* Image Rows */}
      <div className={s.rowsWrapper}>
        {imageRows.map((row, rowIndex) => (
          <div key={rowIndex} className={s.imageRow}>
            {row.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={`Sports Meet ${rowIndex + 1}-${imgIndex + 1}`}
                className={s.image}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySportsMeetSection;
