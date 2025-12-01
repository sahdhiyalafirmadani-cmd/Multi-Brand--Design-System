"use client";

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
      {/* Parent container */}
      <div
        className={`
          max-w-7xl mx-auto px-4 
          flex flex-col md:flex-row 
          items-start md:items-center 
          ${aboutSpacing.containerGap}     /* GAP FIXED HERE */
        `}
      >
        {/* LEFT IMAGE */}
     <div
  className={`
    relative
    ${aboutSpacing.imageWidthDesktop} 
    ${aboutSpacing.imageHeightDesktop}
    mb-8 md:mb-0  md:ml-10
  `}
>
  <Image
    src="/assets/images/sch pic.png"
    alt="School"
    fill
    className="object-cover rounded-lg shadow-lg"
  />
</div>


        {/* RIGHT TEXT */}
       <div className={`flex-1 flex flex-col justify-center ${aboutSpacing.textOffsetDesktop}`}>

          <h4
            className={`${aboutSpacing.headingSizeMobile} md:${aboutSpacing.headingSizeDesktop} ${aboutSpacing.headingWeight} ${aboutSpacing.headingMarginBottom}`}
            style={{ color: aboutColors.heading }}
          >
            Join us where we make excellence
            <br />
            <b>EDUCATION MEETS EXCELLENCE</b>
          </h4>

          <p
            className={`${aboutSpacing.paragraphSizeMobile} md:${aboutSpacing.paragraphSizeDesktop} ${aboutSpacing.paragraphMarginBottom} ${aboutSpacing.paragraphLineHeight} text-justify`}
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
