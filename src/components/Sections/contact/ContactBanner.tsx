"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const ContactBanner = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.contactBanner;
  const c = colors.contactBanner;

  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=contactPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      setImage(
        data.find(
          (i: any) =>
            i.componentName === "Contact_Banner_Image"
        )?.value || ""
      );

      setAlt(
        data.find(
          (i: any) =>
            i.componentName === "Contact_Banner_Alt"
        )?.value || "Contact Banner"
      );
    };

    fetchData();
  }, []);

  if (!image) return null;

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className={s.imageWrapper}>
        <img
          src={image}
          alt={alt}
          className={s.image}
        />
      </div>
    </section>
  );
};

export default ContactBanner;
