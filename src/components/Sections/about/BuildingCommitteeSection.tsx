"use client";

import { useBrand } from "@/theme/use-brand";

const BuildingCommitteeSection = () => {
  const { spacing, colors, typography } = useBrand();
  const section = spacing.sections.buildingCommitteeSection;
  const sectionColors = colors.buildingCommitteeSection;

  return (
    <section
      className={`w-full ${section.sectionPadding}`}
      style={{ backgroundColor: sectionColors.sectionBg }}
    >
      <div className={`mx-auto ${section.containerMaxWidth} text-center`}>
        
        {/* Heading */}
        <h2
          className={`${typography.heading} ${section.headingFont} ${section.headingMarginBottom}`}
          style={{ color: sectionColors.heading }}
        >
          Building Committee
        </h2>

        {/* Committee Members */}
        <div className={`${section.membersGap}`}>
          <h3 className={`${typography.subheading} ${section.memberFont}`} style={{ color: sectionColors.memberText }}>
            Al Haj Y. I. M. Hareez
          </h3>
          <h3 className={`${typography.subheading} ${section.memberFont}`} style={{ color: sectionColors.memberText }}>
            Al Haj M. S. M. Fazlan
          </h3>
          <h3 className={`${typography.subheading} ${section.memberFont}`} style={{ color: sectionColors.memberText }}>
            Al Haj M. M. M. M. Fazlan
          </h3>
          <h3 className={`${typography.subheading} ${section.memberFont}`} style={{ color: sectionColors.memberText }}>
            Al Haj M. Z. M. Ifham
          </h3>
        </div>

        {/* Appreciation Sentence */}
        <p
          className={`${typography.body} ${section.sentenceMarginTop}`}
          style={{ color: sectionColors.sentenceText }}
        >
          We respect and appreciate the invaluable service rendered by the above TEAM in completing the building complex on time.
        </p>
      </div>
    </section>
  );
};

export default BuildingCommitteeSection;
