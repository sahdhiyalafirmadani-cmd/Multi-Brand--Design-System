"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useBrand } from "@/theme/use-brand";

const ManagingDirectorSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.managingDirector;
  const c = colors.managingDirectorSection;

  const [data, setData] = useState({
    heading: "",
    paragraph: "",
    image: "",
    alt: "",
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
          heading: get("ManagingDirector_Heading"),
          paragraph: get("ManagingDirector_Paragraph"),
          image: get("ManagingDirector_Image"),
          alt: get("ManagingDirector_Alt"),
        });
      } catch (error) {
        console.error("Error fetching ManagingDirector data:", error);
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
      <div className={`${s.containerMaxWidth} mx-auto flex flex-col ${s.containerGap}`}>

        {/* Heading */}
        {data.heading && (
          <h2
            className={`${s.headingSizeMobile} ${s.headingSizeDesktop} ${s.headingWeight} ${s.headingTextAlign} ${s.headingMarginBottom}`}
            style={{ color: c.heading }}
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
        )}

        {/* Image + Paragraph */}
        <div className={`flex flex-col md:flex-row items-start md:items-center ${s.contentGap}`}>

          {/* Left Image */}
          {data.image && (
            <div className={`${s.imageWidthMobile} ${s.imageWidthDesktop} relative ${s.imageHeightMobile} md:${s.imageHeightDesktop} flex-shrink-0`}>
              <Image
                src={data.image}
                alt={data.alt}
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Right Paragraph */}
          {data.paragraph && (
            <div className={`${s.textContainerWidthMobile} ${s.textContainerWidthDesktop} flex flex-col justify-center`}>
              <p
                className={`${s.paragraphLineHeight} text-justify`}
                style={{ color: c.text }}
                dangerouslySetInnerHTML={{ __html: data.paragraph }}
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ManagingDirectorSection;
