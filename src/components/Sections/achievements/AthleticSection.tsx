"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

type AthleticItem = {
  heading: string;
  image: string;
};

const AthleticSection = () => {
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
      <div className="container mx-auto">

        {/* MAIN HEADING */}
        <h1 className={s.mainHeading} style={{ color: c.heading }}>
          {mainHeading}
        </h1>

        {/* ITEMS GRID */}
        <div className={s.itemsGrid}>
          {items.map((item, index) => (
            <div key={index} className={s.itemWrapper}>
              
              <h2 className={s.subHeading} style={{ color: c.heading }}>
                {item.heading}
              </h2>

              <div className={s.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthleticSection;
