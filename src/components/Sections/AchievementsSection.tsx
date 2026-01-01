"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";
import Link from "next/link";
import Button from "../primitives/Button/Button";

const AchievementsSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.achievements;
  const c = colors.achievementsSection;

  const [data, setData] = useState({
    heading: "",
    buttonText: "",
    buttonLink: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/sheetData?sheet=homePage");
        const sheetData = await res.json();
        if (!Array.isArray(sheetData)) return;

        const get = (name: string) =>
          sheetData.find((i: any) => i.componentName === name)?.value || "";

        setData({
          heading: get("Achievements_Heading"),
          buttonText: get("Achievements_ButtonText"),
          buttonLink: get("Achievements_ButtonLink"),
        });
      } catch (error) {
        console.error("Error fetching AchievementsSection data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data.heading) return null;

  return (
    <section
      className={`${s.sectionPaddingMobile} md:${s.sectionPaddingDesktop} ${s.containerFlex}`}
      style={{ backgroundColor: c.bg }}
    >
      {/* Heading */}
      {data.heading && (
        <h2
          className={`${s.headingSizeMobile} ${s.headingSizeDesktop} ${s.headingWeight} ${s.headingMarginBottom} ${s.headingTextAlign}`}
          style={{ color: c.heading }}
        >
          {data.heading}
        </h2>
      )}

      {/* Button */}
      {data.buttonText && data.buttonLink && (
        <Link href={data.buttonLink}>
          <Button
            text={data.buttonText}
            colors={c}
            className={`${s.buttonWidthMobile} ${s.buttonWidthDesktop}`}
          />
        </Link>
      )}
    </section>
  );
};

export default AchievementsSection;
