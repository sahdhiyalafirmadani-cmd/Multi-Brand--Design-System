"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const OurTeachersSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.careersTeachers;
  const c = colors.careersTeachers;

  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=careersPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      setHeading(
        data.find(
          (i: any) =>
            i.componentName === "Careers_Teachers_MainHeading"
        )?.value || ""
      );

      setText(
        data.find(
          (i: any) =>
            i.componentName === "Careers_Teachers_Paragraph"
        )?.value || ""
      );

      setImage(
        data.find(
          (i: any) =>
            i.componentName === "Careers_Teachers_Image"
        )?.value || ""
      );

      setAlt(
        data.find(
          (i: any) =>
            i.componentName === "Careers_Teachers_ImageAlt"
        )?.value || "Teachers"
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
        <div className={s.textWrapper}>
          <p className={s.paragraph} style={{ color: c.text }}>
            {text}
          </p>
        </div>

        {image && (
          <div className={s.imageWrapper}>
            <img
              src={image}
              alt={alt}
              className={s.image}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default OurTeachersSection;
