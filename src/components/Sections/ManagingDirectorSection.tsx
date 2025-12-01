"use client";

import React from "react";
import Image from "next/image";
import { useBrand } from "@/theme/use-brand";

const ManagingDirectorSection = () => {
  const { colors, spacing } = useBrand();
  const mdColors = colors.managingDirectorSection;
  const mdSpacing = spacing.sections.managingDirector;

  return (
    <section
      className={`${mdSpacing.sectionPaddingMobile} md:${mdSpacing.sectionPaddingDesktop}`}
      style={{ backgroundColor: mdColors.bg }}
    >
      <div className={`${mdSpacing.containerMaxWidth} mx-auto flex flex-col ${mdSpacing.containerGap}`}>

        {/* Heading at top center */}
        <h2
          className={`${mdSpacing.headingSizeMobile} ${mdSpacing.headingSizeDesktop} ${mdSpacing.headingWeight} ${mdSpacing.headingTextAlign} ${mdSpacing.headingMarginBottom}`}
          style={{ color: mdColors.heading }}
        >
          MESSAGE FROM OUR MANAGING DIRECTOR
        </h2>

        {/* Image and paragraph */}
        <div className={`flex flex-col md:flex-row items-start md:items-center ${mdSpacing.contentGap}`}>

          {/* Left Image */}
          <div className={`${mdSpacing.imageWidthMobile} ${mdSpacing.imageWidthDesktop} relative ${mdSpacing.imageHeightMobile} md:${mdSpacing.imageHeightDesktop} flex-shrink-0`}>
            <Image
              src="/assets/images/md.jpg"
              alt="Managing Director"
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Right Paragraph */}
          <div className={`${mdSpacing.textContainerWidthMobile} ${mdSpacing.textContainerWidthDesktop} flex flex-col justify-center`}>
            <p
              className={`${mdSpacing.paragraphLineHeight} text-justify`}
              style={{ color: mdColors.text }}
            >
              Dear students, parents, and esteemed faculty members of Alif International School,
              <br /><br />
              It fills me with immense pleasure to address you today. Our journey of educational excellence continues, fueled by our collective passion and commitment. As Managing Director, I stand proud of our dedicated educators and staff who tirelessly strive to provide a nurturing environment for our students. Together, we embark on a voyage of knowledge and growth, fostering critical thinking, empathy, and resilience. Let us embrace challenges as opportunities, celebrate diversity, and ignite the flame of curiosity within each student. With our unwavering dedication, I have no doubt that we will shape future leaders who will make a positive impact on the world.
              <br /><br />
              Mr. Hussain Sadiquez
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManagingDirectorSection;
