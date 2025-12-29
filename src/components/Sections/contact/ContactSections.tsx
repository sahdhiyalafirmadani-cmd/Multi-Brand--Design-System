"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

type ContactItem = {
  image: string;
  heading: string;
  text: string;
};

const ContactSections = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.contactSections;
  const c = colors.contactSections;

  const [sections, setSections] = useState<ContactItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/sheetData?sheet=contactPage");
        const data = await res.json();

        if (!Array.isArray(data)) return;

        const items: ContactItem[] = ["Call", "Location", "Mail"].map((type) => {
          const image = data.find(
            (i: any) => i.componentName === `Contact_${type}_Image`
          )?.value || "";
          const heading = data.find(
            (i: any) => i.componentName === `Contact_${type}_Heading`
          )?.value || "";
          const text = data.find(
            (i: any) => i.componentName === `Contact_${type}_Text`
          )?.value || "";

          return { image, heading, text };
        });

        setSections(items);
      } catch (err) {
        console.error("Failed to fetch contact data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className={s.sectionWrapper}>
        {sections.map((sec, idx) => (
          <div key={idx} className={s.itemWrapper}>
            {sec.image && <img src={sec.image} alt={sec.heading} className={s.image} />}
            {sec.heading && <h1 className={s.heading} style={{ color: c.heading }}>{sec.heading}</h1>}
            {sec.text && <p className={s.text} style={{ color: c.text }}>{sec.text}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSections;
