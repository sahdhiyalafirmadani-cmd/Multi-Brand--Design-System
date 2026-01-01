"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useBrand } from "@/theme/use-brand";

const FoundingDirectorSection = () => {
  const { spacing, colors, typography } = useBrand();
  const s = spacing.sections.foundingDirectorSection;
  const c = colors.foundingDirectorSection;

  const [data, setData] = useState({
    heading: "",
    paragraph: "",
    image: "",
    imageAlt: "",
    signature: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/sheetData?sheet=aboutPage");
        const sheetData = await res.json();
        if (!Array.isArray(sheetData)) return;

        const get = (name: string) =>
          sheetData.find((i: any) => i.componentName === name)?.value || "";

        setData({
          heading: get("FoundingDirector_Heading"),
          paragraph: get("FoundingDirector_Paragraph"),
          image: get("FoundingDirector_Image"),
          imageAlt: get("FoundingDirector_Alt"),
          signature: get("FoundingDirector_Signature"),
        });
      } catch (error) {
        console.error("Error fetching Founding Director data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data.heading) return null;

  return (
    <section
      className={s.sectionPadding}
      style={{ backgroundColor: c.sectionBg }}
    >
      <div className={s.containerMaxWidth}>

        {/* Heading */}
        <h2
          className={`${typography.heading} ${s.headingFont} ${s.headingMarginBottom} ${s.headingWrapper}`}
          style={{ color: c.heading }}
        >
          {data.heading}
        </h2>

        {/* Content Container */}
        <div className={s.contentContainer}>

          {/* Image */}
          {data.image && (
            <div className={s.imageWrapper}>
              <Image
                src={data.image}
                alt={data.imageAlt}
                width={400}
                height={400}
                className={s.imageStyle}
              />
            </div>
          )}

          {/* Paragraph */}
          <div className={s.textWrapper}>
            {data.paragraph && (
              <p
                className={typography.body}
                style={{ color: c.text }}
                dangerouslySetInnerHTML={{ __html: data.paragraph }}
              />
            )}

            {data.signature && (
              <b
                style={{ color: c.signature }}
                dangerouslySetInnerHTML={{ __html: data.signature }}
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundingDirectorSection;
