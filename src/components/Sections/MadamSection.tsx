"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";
import Button from "../primitives/Button/Button";

const MadamSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.messageFromMadam;
  const c = colors.messageFromMadam;

  const [data, setData] = useState({
    heading: "",
    paragraph: "",
    image: "",
    alt: "",
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
          heading: get("Madam_Heading"),
          paragraph: get("Madam_Paragraph"),
          image: get("Madam_Image"),
          alt: get("Madam_Alt"),
          buttonText: get("Madam_ButtonText"),
          buttonLink: get("Madam_ButtonLink"),
        });
      } catch (error) {
        console.error("Error fetching MadamSection data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data.heading) return null;

  return (
    <section
      className={`${s.sectionPaddingMobile} md:${s.sectionPaddingDesktop}`}
      style={{ backgroundColor: c.bg }}
    >
      <div className={`container mx-auto flex flex-col md:flex-row items-center ${s.containerGap} px-4`}>

        {/* Madam Image */}
        {data.image && (
          <div className={`${s.imageWidthMobile} ${s.imageWidthDesktop} flex justify-center ${s.imageHeightMobile} md:${s.imageHeightDesktop}`}>
            <img
              src={data.image}
              alt={data.alt}
              className="rounded-lg shadow-lg max-w-full h-auto transform transition-transform duration-300 hover:scale-105 active:scale-110"
            />
          </div>
        )}

        {/* Text Content */}
        <div className={`${s.textWidthMobile} ${s.textWidthDesktop} text-center md:text-left flex flex-col justify-center`}>
          {data.heading && (
            <h2
              className={`${s.headingSizeMobile} ${s.headingSizeDesktop} ${s.headingWeight} ${s.headingMarginBottom}`}
              style={{ color: c.heading }}
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />
          )}

          {data.paragraph && (
            <p
              className={`${s.paragraphSizeMobile} ${s.paragraphSizeDesktop} ${s.paragraphLineHeight} ${s.paragraphMarginBottom} text-justify`}
              style={{ color: c.text }}
              dangerouslySetInnerHTML={{ __html: data.paragraph }}
            />
          )}

          {data.buttonText && data.buttonLink && (
            <div className={s.buttonAlign}>
              <Button
                text={data.buttonText}
                colors={c}
                onClick={() => (window.location.href = data.buttonLink)}
                className={`${s.buttonWidthMobile} ${s.buttonWidthDesktop}`}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MadamSection;
