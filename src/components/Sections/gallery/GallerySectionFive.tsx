"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

interface SectionImages {
  heading: string;
  images: string[];
}

const GallerySectionFive = () => {
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
          { headingKey: "Gallery_ExtraActivities_Section", imagesKey: "Gallery_ExtraActivities_Images" },
          { headingKey: "Gallery_ArtsCraft_Section", imagesKey: "Gallery_ArtsCraft_Images" },
          { headingKey: "Gallery_CharityDay_Section", imagesKey: "Gallery_CharityDay_Images" },
          { headingKey: "Gallery_AnnualConcert_Section", imagesKey: "Gallery_AnnualConcert_Images" },
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
            {/* Section Heading */}
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

export default GallerySectionFive;
