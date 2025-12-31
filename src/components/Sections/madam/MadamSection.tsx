"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const MadamSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.madam;
  const c = colors.madam;

  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=madamPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      setHeading(
        data.find((i: any) => i.componentName === "Madam_MainHeading")?.value || ""
      );

      setParagraph(
        data.find((i: any) => i.componentName === "Madam_Paragraph")?.value || ""
      );

      setImage(
        data.find((i: any) => i.componentName === "Madam_Image")?.value || ""
      );

      setAlt(
        data.find((i: any) => i.componentName === "Madam_ImageAlt")?.value || "Madam"
      );
    };

    fetchData();
  }, []);

  if (!heading) return null;

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      
      {/* Heading */}
      <div className={s.headingWrapper}>
        <h2 className={s.headingSize} style={{ color: c.heading }}>
          {heading}
        </h2>
      </div>

      {/* Content */}
      <div className={s.contentWrapper}>
        
        {image && (
          <div className={s.imageWrapper}>
            <img
              src={image}
              alt={alt}
              className={s.image}
            />
          </div>
        )}

        <div className={s.textWrapper}>
          <p
            className={s.paragraph}
            style={{ color: c.text }}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>

      </div>
    </section>
  );
};

export default MadamSection;
