"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const GallerySportsMeetSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.gallerySportsMeet;
  const c = colors.gallerySportsMeet;

  const [heading, setHeading] = useState("");
  const [images, setImages] = useState<string[]>([]);

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

        // All images
        const allImages = data
          .filter((i: any) => i.componentName === "Gallery_SportsMeet_Images" && i.value)
          .flatMap((i: any) =>
            (i.value as string)
              .split("|")
              .map((img: string) => img.trim())
              .filter(Boolean)
          );

        setImages(allImages);
      } catch (error) {
        console.error("Failed to fetch gallery data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className={s.container}>
        
        {/* Heading */}
        <h1 className={s.headingSize} style={{ color: c.heading }}>
          {heading}
        </h1>

        {/* Image Grid */}
        <div className={s.imageGrid}>
          {images.map((img, index) => (
            <div key={index} className={s.imageOuter}>
              <img
                src={img}
                alt={`Sports Meet ${index + 1}`}
                className={s.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySportsMeetSection;
