"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

type Achiever = {
  image: string;
  name: string;
  description: string;
};

const AchieversSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.achievementsAchievers;
  const c = colors.achievementsAchievers;

  const [achievers, setAchievers] = useState<Achiever[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=achievementsPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      const images = data.filter((i: any) => i.componentName === "Achievers_Image");
      const names = data.filter((i: any) => i.componentName === "Achievers_Name");
      const descriptions = data.filter(
        (i: any) => i.componentName === "Achievers_Description"
      );

      const combined: Achiever[] = images.map((img: any, index: number) => ({
        image: img.value,
        name: names[index]?.value || "",
        description: descriptions[index]?.value || "",
      }));

      setAchievers(combined);
    };

    fetchData();
  }, []);

  return (
    <section
      className={s.sectionPadding}
      style={{ backgroundColor: c.bg }}
    >
      <div className="container mx-auto">
        <div className={s.wrapper}>
          {achievers.map((item, index) => (
            <div key={index} className={s.itemWrapper}>
              <div className={s.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain "
                />
              </div>

              <h3 className={s.nameText} style={{ color: c.name }}>
                {item.name}
              </h3>

              <p
                className={s.descriptionText}
                style={{ color: c.description }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchieversSection;
