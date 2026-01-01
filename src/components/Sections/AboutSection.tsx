"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useBrand } from "@/theme/use-brand";
import Button from "../primitives/Button/Button";

const AboutSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.about;
  const c = colors.aboutSection;

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
          heading: get("AboutSection_Heading"),
          paragraph: get("AboutSection_Paragraph"),
          image: get("AboutSection_Image"),
          alt: get("AboutSection_Alt"),
          buttonText: get("AboutSection_ButtonText"),
          buttonLink: get("AboutSection_ButtonLink"),
        });
      } catch (error) {
        console.error("Error fetching AboutSection data:", error);
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
      <div className={`${s.containerMaxWidth} ${s.containerFlex}`}>

        {/* LEFT IMAGE */}
        {data.image && (
          <div className={s.imageWrapper}>
            <Image
              src={data.image}
              alt={data.alt}
              width={500}
              height={420}
              className={s.imageStyle}
              priority
            />
          </div>
        )}

        {/* RIGHT CONTENT */}
        <div className={s.textWrapper}>
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
            <div className={s.buttonGap}>
              <Link href={data.buttonLink}>
                <Button text={data.buttonText} colors={c} />
              </Link>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
