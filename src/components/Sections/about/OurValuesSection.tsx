"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";
import Image from "next/image";

interface SheetItem {
  componentName?: string;
  textLabel?: string;
  value?: string;
}

const OurValuesSection = () => {
  const { spacing, colors } = useBrand();
  const section = spacing.sections.ourValuesSection;
  const sectionColors = colors.ourValuesSection;

  const [data, setData] = useState<SheetItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=aboutPage");
      const sheetData: SheetItem[] = await res.json();
      if (!Array.isArray(sheetData)) return;
      setData(sheetData);
    };
    fetchData();
  }, []);

  if (!data.length) return null;

  const logoUrl = data.find((i) => i.componentName === "OurValues_Logo")?.value || "";

  const boxKeys = ["Motto", "Mission", "Vision"];
  const boxes = boxKeys.map((key) => {
    const heading = data.find((i) => i.componentName === `OurValues_${key}_Heading`)?.value || "";
    const content = data.find((i) => i.componentName === `OurValues_${key}_Content`)?.value || "";
    return { heading, content };
  });

  return (
    <section
      className={`w-full ${section.sectionPadding}`}
      style={{ backgroundColor: sectionColors.sectionBg }}
    >
      <div className={`${section.containerMaxWidth} ${section.containerFlex} ${section.containerGap}`}>
        {boxes.map((box, idx) => (
          <div
            key={idx}
            className={`${section.boxWidth} ${section.boxPadding} ${section.boxBorderRadius} ${section.boxFlex} ${section.boxGap} ${section.boxHoverTransform} relative overflow-hidden group`}
            style={{ backgroundColor: sectionColors.boxBg }}
          >
            {/* Centered Background Logo */}
            {logoUrl && (
              <div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                  width: section.logo.width,
                  height: section.logo.height,
                  transform: "translate(-50%, -50%)",
                  opacity: section.logo.opacity,
                  transition: section.logo.transition,
                }}
              >
                <Image
                  src={logoUrl}
                  alt={boxes[idx].heading}
                  fill
                  style={{ objectFit: section.logo.objectFit as any }}
                  className={section.logo.className} // hover scale
                />
              </div>
            )}

            {/* Heading */}
            <h2
              className={`${section.headingFont} ${section.headingFlex}`}
              style={{ color: sectionColors.heading }}
            >
              {box.heading}
            </h2>

            {/* Content */}
            <div className={section.textFlex}>
              {box.content.split("<br />").map((line, i) => (
                <p key={i} className={section.textFont}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValuesSection;
