"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

interface SectionImages {
  heading: string;
  images: string[];
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
          { headingKey: "Gallery_Independence_Section", imagesKey: "Gallery_Independence_Images" },
          { headingKey: "Gallery_Elocution_Section", imagesKey: "Gallery_Elocution_Images" },
          { headingKey: "Gallery_Founders_Section", imagesKey: "Gallery_Founders_Images" },
          { headingKey: "Gallery_StaffTrip_Section", imagesKey: "Gallery_StaffTrip_Images" },
          { headingKey: "Gallery_Csr_Section", imagesKey: "Gallery_Csr_Images" },
        ].map(({ headingKey, imagesKey }) => ({
          heading: data.find((i: any) => i.componentName === headingKey)?.value || "",
          images: data
            .filter((i: any) => i.componentName === imagesKey && i.value)
            .flatMap((i: any) =>
              (i.value as string)
                .split("|")
                .map((img: string) => img.trim())
                .filter(Boolean)
            ),
        }));

        setSections(gallerySections);
      } catch (error) {
        console.error("Failed to fetch gallery data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className={s.container}>
        {sections.map((section, idx) => (
          <div key={idx} className={s.sectionWrapper}>
            {/* Heading */}
            <h2 className={s.headingSize} style={{ color: c.heading }}>
              {section.heading}
            </h2>

            {/* Image Grid */}
            <div className={s.imageGrid}>
              {section.images.map((img, imgIndex) => (
                <div key={imgIndex} className={s.imageOuter}>
                  <img
                    src={img}
                    alt={`${section.heading} ${imgIndex + 1}`}
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

export default GallerySectionThree;
