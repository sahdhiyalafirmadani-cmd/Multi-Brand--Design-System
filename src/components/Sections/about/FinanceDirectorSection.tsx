"use client";

import Image from "next/image";
import { useBrand } from "@/theme/use-brand";

const FinanceDirectorSection = () => {
  const { spacing, colors, typography } = useBrand();
  const section = spacing.sections.financeDirectorSection;
  const sectionColors = colors.financeDirectorSection;

  return (
    <section
      className={`w-full ${section.sectionPadding}`}
      style={{ backgroundColor: sectionColors.sectionBg }}
    >
      <div className={`mx-auto ${section.containerMaxWidth}`}>

        {/* Heading */}
        <h2
          className={`text-center ${section.headingFont} ${section.headingMarginBottom}`}
          style={{ color: sectionColors.heading }}
        >
          MESSAGE FROM FINANCE DIRECTOR
        </h2>

        {/* Content Row */}
        <div
          className={`flex flex-col-reverse md:flex-row items-start md:items-center ${section.contentGap}`}
        >

          {/* LEFT – TEXT */}
          <div className={`${section.textWrapper}`}>
            <p className={`${typography.body} leading-relaxed`} style={{ color: sectionColors.text }}>
              I am glad to write this on the launching of Alif International
              School (AIS-DT), Dharga Town website. People going through this
              website will realize the glimpse of in-depth happening in AIS-DT.
              <br /><br />

              AIS-DT has its own complete infrastructure and it is situated in
              a highly educational environment by the side of a pleasant river.
              Our well experienced principal Mrs. Nazneen Ousmand is 
              instrumental in the continuous progress and actively involved 
              in various activities that have brought to light the hidden 
              talents of the college students and staff.
              <br /><br />

              AIS-DT charges nominal fees to make quality education affordable 
              to the general public of Dharga Town and its vicinity. Further, 
              AIS-DT offers scholarships to deserving high achieving students.
              <br /><br />

              AIS-DT is doing good in all directions, wishing a bright future 
              to all students and staff.
              <br /><br />

              Ending with a quote…
              <br /><br />

              <i>“Education will be expensive, but ignorance will be disastrous.”</i>
              <br /><br />

              <b style={{ color: sectionColors.signature }}>
                Mr. Azeem Ismail<br />
                Director – Finance
              </b>
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div className={`${section.imageWrapper}`}>
            <Image
              src="/assets/images/about us/fd.png"
              alt="Finance Director"
              width={400}
              height={400}
              className={`rounded-xl shadow-lg object-cover ${section.imageStyle}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceDirectorSection;
