"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const HistoryMontessoriSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.historyMontessori;
  const c = colors.historyMontessori;

  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=montessoriPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      setHeading(
        data.find((i: any) => i.componentName === "Montessori_MainHeading")?.value || ""
      );
      setText(
        data.find((i: any) => i.componentName === "Montessori_Paragraph")?.value || ""
      );
      setImage(
        data.find((i: any) => i.componentName === "Montessori_Image")?.value || ""
      );
      setAlt(
        data.find((i: any) => i.componentName === "Montessori_ImageAlt")?.value || "Montessori"
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

      {/* Image */}
      {image && (
        <div className={s.imageWrapper}>
          <img src={image} alt={alt} className={s.image} />
        </div>
      )}

      {/* Paragraph */}
      <div className={s.textWrapper}>
        <p
          className={s.paragraph}
          style={{ color: c.text }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </section>
  );
};

export default HistoryMontessoriSection;
