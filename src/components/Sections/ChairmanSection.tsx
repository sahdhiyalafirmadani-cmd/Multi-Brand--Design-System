"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBrand } from "@/theme/use-brand";
import Button from "../primitives/Button/Button";

export default function ChairmanSection() {
  const router = useRouter();
  const { spacing, colors } = useBrand();
  const s = spacing.sections.chairman;
  const c = colors.chairmanSection;

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
          heading: get("Chairman_Heading"),
          paragraph: get("Chairman_Paragraph"),
          image: get("Chairman_Image"),
          alt: get("Chairman_Alt"),
          buttonText: get("Chairman_ButtonText"),
          buttonLink: get("Chairman_ButtonLink"),
        });
      } catch (error) {
        console.error("Error fetching Chairman data:", error);
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
      <div className={`${s.containerFlex} ${s.containerGap} max-w-6xl mx-auto`}>

        {/* LEFT TEXT */}
        <div>
          {data.heading && (
            <h2
              className={`${s.headingSizeMobile} ${s.headingSizeDesktop} ${s.headingWeight} ${s.headingMarginBottom}`}
              style={{ color: c.heading }}
            >
              {data.heading}
            </h2>
          )}

          {data.paragraph && (
            <p
              className={`${s.paragraphLineHeight} ${s.paragraphMarginBottom} text-justify`}
              style={{ color: c.text }}
              dangerouslySetInnerHTML={{ __html: data.paragraph }}
            />
          )}

          {data.buttonText && data.buttonLink && (
            <div className={s.buttonGap}>
              <Button
                text={data.buttonText}
                colors={c}
                onClick={() => router.push(data.buttonLink)}
              />
            </div>
          )}
        </div>

        {/* RIGHT IMAGE */}
        {data.image && (
          <div className={s.imageWrapper}>
            <Image
              src={data.image}
              alt={data.alt}
              width={s.imageWidth}
              height={s.imageHeight}
              className={s.imageStyle}
            />
          </div>
        )}

      </div>
    </section>
  );
}
