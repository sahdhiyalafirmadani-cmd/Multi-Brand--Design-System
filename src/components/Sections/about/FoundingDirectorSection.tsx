"use client";

import Image from "next/image";
import { useBrand } from "@/theme/use-brand";

const FoundingDirectorSection = () => {
  const { spacing, colors, typography } = useBrand();
  const section = spacing.sections.foundingDirectorSection;
  const sectionColors = colors.foundingDirectorSection;

  return (
    <section
      className={`w-full ${section.sectionPadding}`}
      style={{ backgroundColor: sectionColors.sectionBg }}
    >
      <div className={`mx-auto ${section.containerMaxWidth}`}>

        {/* Heading */}
        <h2
          className={`text-center ${typography.heading} ${section.headingFont} ${section.headingMarginBottom}`}
          style={{ color: sectionColors.heading }}
        >
          MESSAGE FROM FOUNDING DIRECTOR
        </h2>

        {/* Container */}
        <div className={`flex flex-col md:flex-row items-center ${section.contentGap}`}>

          {/* Image */}
          <div className={`flex-shrink-0 ${section.imageWrapper}`}>
            <Image
              src="/assets/images/about us/fd.jpg"
              alt="Founding Director"
              width={400}
              height={400}
              className={`rounded-xl shadow-md ${section.imageStyle}`}
            />
          </div>

          {/* Paragraph */}
          <div className={`${section.textWrapper}`}>
            <p
              className={`${typography.body} leading-relaxed`}
              style={{ color: sectionColors.text }}
            >
              I’m indeed happy to send this message of congratulations on
              the occasion of the launching of the brand new website of my
              beloved Alif International School, managed by Alif Education
              Foundation (Pvtm) Ltd.<br /><br />

              Although 20 years have lapsed since the inception of the
              school, it’s heartening to know that a sincere effort has been
              made at this important juncture, to launch a full fledged
              website for the benefit of all the stakeholders including the
              management, teachers, students, parents and the well wishers.<br /><br />

              I sincerely hope that this website will be very helpful in boosting
              the image of the school while helping people to know about its
              vision, mission and its day to day academic and extra
              curricular activities. This website also will provide an
              opportunity for effective and fast communication among the
              main stakeholders.
              I sincerely wish the project success in achieving its goals!<br /><br />

              <b style={{ color: sectionColors.signature }}>
                Hafiz Issadeen<br />
                Founder Principal / Director
              </b>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundingDirectorSection;
