"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useBrand } from "@/theme/use-brand";
import Button from "../primitives/Button/Button";

const AboutSection = () => {
  const { colors, spacing } = useBrand();
  const aboutColors = colors.aboutSection;
  const aboutSpacing = spacing.sections.about;

  return (
    <section
      className={`${aboutSpacing.sectionPaddingMobile} md:${aboutSpacing.sectionPaddingDesktop}`}
      style={{ backgroundColor: aboutColors.bg }}
    >
      <div
        className={`${aboutSpacing.containerMaxWidth} mx-auto flex flex-col md:flex-row items-start md:items-center ${aboutSpacing.containerGap}`}
      >
        {/* LEFT IMAGE */}
        <div
          className={`flex justify-center w-full ${aboutSpacing.imageWidthDesktop} flex-shrink-0`}
        >
          <Image
            src="/assets/images/sch_pic.png"
            alt="School"
            width={500} // adjust as needed
            height={420}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>

        {/* RIGHT TEXT */}
        <div
          className={`flex flex-col justify-center w-full ${aboutSpacing.textContainerWidthDesktop}`}
        >
          <h2
            className={`${aboutSpacing.headingSizeMobile} md:${aboutSpacing.headingSizeDesktop} ${aboutSpacing.headingWeight} ${aboutSpacing.headingMarginBottom}`}
            style={{ color: aboutColors.heading }}
          >
            Join us where we make excellence
            <br />
            <b>EDUCATION MEETS EXCELLENCE</b>
          </h2>

          <p
            className={`${aboutSpacing.paragraphSizeMobile} md:${aboutSpacing.paragraphSizeDesktop} ${aboutSpacing.paragraphLineHeight} ${aboutSpacing.paragraphMarginBottom} text-justify`}
            style={{ color: aboutColors.text }}
          >
            Alif International School is a well-known educational institution
            that has been providing quality education to students in its locality
            for several years. The school is committed to fostering academic
            excellence, character development, and personal growth in its
            students. One of the school's main achievements is its dedication to
            maintain a high standard education. Alif International School offers
            a rigorous and comprehensive curriculum that is designed to challenge
            students and prepare them for success in their future academic and
            professional pursuits. The school also provides a variety of
            extra-curricular activities that allow students to explore their
            interests and develop their skill in areas such as academics, sports,
            and arts.
          </p>

          <div className={aboutSpacing.buttonGap}>
            <Link href="/about-us">
              <Button text="LEARN MORE" colors={aboutColors} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
