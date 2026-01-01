"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const AboutBanner = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.aboutBanner;
  const c = colors.aboutBanner;

  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=aboutPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      setImage(
        data.find((i: any) => i.componentName === "AboutBanner_Image")?.value ||
          ""
      );

      setAlt(
        data.find((i: any) => i.componentName === "AboutBanner_Alt")?.value ||
          "About Us"
      );
    };

    fetchData();
  }, []);

  if (!image) return null;

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className={`${s.imageWrapper} ${s.heightClasses}`}>
        <img src={image} alt={alt} className={s.image} />
      </div>
    </section>
  );
};

export default AboutBanner;
