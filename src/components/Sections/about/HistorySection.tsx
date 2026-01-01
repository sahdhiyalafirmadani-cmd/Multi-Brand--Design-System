"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useBrand } from "@/theme/use-brand";
import { useRouter } from "next/navigation";
import AboutButton from "@/components/primitives/Button/AboutButton";

const HistorySection = () => {
  const { colors, spacing, typography } = useBrand();
  const s = spacing.sections.historySection;
  const c = colors.historySection;
  const router = useRouter();

  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=aboutPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      const get = (name: string) =>
        data.find((i: any) => i.componentName === name)?.value || "";

      setHeading(get("HistorySection_Heading"));
      setParagraph(get("HistorySection_Paragraph"));
      setButtonText(get("HistorySection_ButtonText"));
      setButtonLink(get("HistorySection_ButtonLink"));
      setImage(get("HistorySection_Image"));
      setImageAlt(get("HistorySection_ImageAlt"));
    };

    fetchData();
  }, []);

  if (!heading || !paragraph) return null;

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className={`${s.container} ${s.containerGap}`}>

        {/* Heading (centered) */}
        <div className={s.headingWrapper}>
          <h2
            className={`${typography.heading} ${s.headingSize} ${s.headingWeight} ${s.headingMarginBottom}`}
            style={{ color: c.heading }}
          >
            {heading}
          </h2>
        </div>

        {/* Content Row */}
        <div className={`${s.contentRow} ${s.contentGap}`}>

          {/* Left Column */}
          <div className={s.leftColumn}>
            <p
              className={`${s.paragraphSize} ${s.paragraphLineHeight} ${s.paragraphMarginBottom}`}
              style={{ color: c.text }}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />

            <AboutButton
              text={buttonText}
              className={s.buttonAlign}
              width={s.buttonWidth}
              onClick={() => router.push(buttonLink)}
              colors={{
                buttonBg: c.buttonBg,
                buttonText: c.buttonText,
                buttonHoverBg: c.buttonHoverBg,
                buttonHoverText: c.buttonHoverText,
              }}
            />
          </div>

          {/* Right Column (Image) */}
          <div className={s.rightColumn}>
            {image && (
              <div className={`${s.imageWrapper} ${s.imageHeight}`}>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HistorySection;
