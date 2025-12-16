"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

type AthleticItem = {
  heading: string;
  image: string;
};

const  AthleticSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.athleticAchievements;
  const c = colors.athleticAchievements;

  const [mainHeading, setMainHeading] = useState<string>("");
  const [items, setItems] = useState<AthleticItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=achievementsPage");
      const data = await res.json();

      if (!Array.isArray(data)) return;

      const main = data.find(
        (i: any) => i.componentName === "Athletic_MainHeading"
      )?.value;

      const sectionItems = data
        .filter((i: any) => i.componentName === "Athletic_Section")
        .map((i: any) => {
          const [heading, image] = i.value.split("|").map((v: string) => v.trim());
          return { heading, image };
        });

      setMainHeading(main || "");
      setItems(sectionItems);
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className="container mx-auto flex flex-col items-center gap-6">
        {/* Main Heading */}
       <h1 className={`${s.headingSize} ${s.headingWeight}`} style={{ color: c.heading }}>
    {mainHeading}
  </h1>

        {/* Items */}
        {items.map((item, index) => (
          <div key={index} className={s.itemWrapper}>
            {/* Heading */}
            <h2 className={`${s.headingSize} font-semibold`} style={{ color: c.heading }}>
              {item.heading}
            </h2>

            {/* Image */}
            <div className={s.imageWrapper}>
              <Image src={item.image} alt={item.heading} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AthleticSection;
