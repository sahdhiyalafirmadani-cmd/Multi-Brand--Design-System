"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useBrand } from "@/theme/use-brand";
import { useRouter } from "next/navigation";
import AboutButton from "@/components/primitives/Button/AboutButton";

const HistoryMontessoriSection = () => {
  const { colors, spacing, typography } = useBrand();
  const s = spacing.sections.historyMontessoriSection;
  const c = colors.historyMontessoriSection;
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

      setHeading(get("HistoryMontessori_Heading"));
      setParagraph(get("HistoryMontessori_Paragraph"));
      setButtonText(get("HistoryMontessori_ButtonText"));
      setButtonLink(get("HistoryMontessori_ButtonLink"));
      setImage(get("HistoryMontessori_Image"));
      setImageAlt(get("HistoryMontessori_ImageAlt"));
    };

    fetchData();
  }, []);

  if (!heading || !paragraph) return null;

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className={`${s.container} ${s.containerGap}`}>

        {/* Heading */}
        <div className={s.headingWrapper}>
          <h2
            className={`${typography.heading} ${s.headingSize} ${s.headingMarginBottom} text-center`}
            style={{ color: c.heading }}
          >
            {heading}
          </h2>
        </div>

        {/* Content */}
        <div className={`${s.contentRow} ${s.contentGap}`}>

          {/* Image */}
          <div className={s.leftColumn}>
            {image && (
              <Image
                src={image}
                alt={imageAlt}
                width={500}
                height={500}
                className={s.image}
                style={{ objectFit: "cover" }}
              />
            )}
          </div>

          {/* Text */}
          <div className={s.rightColumn}>
            <p
              className={`${typography.body} ${s.paragraphSize} ${s.paragraphMarginBottom} text-justify`}
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

        </div>
      </div>
    </section>
  );
};

export default HistoryMontessoriSection;
