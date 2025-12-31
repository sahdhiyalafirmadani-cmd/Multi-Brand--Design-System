"use client";

import Image from "next/image";
import { useBrand } from "@/theme/use-brand";
import { useRouter } from "next/navigation";
import AboutButton from "@/components/primitives/Button/AboutButton";

const HistorySection = () => {
  const { colors, spacing, typography } = useBrand();
  const history = spacing.sections.historySection;
  const sectionColors = colors.historySection;
  const router = useRouter();

  return (
    <section
      className={`w-full ${history.sectionPadding}`}
      style={{ backgroundColor: sectionColors.bg }}
    >
      <div className={`max-w-7xl mx-auto flex flex-col items-center ${history.contentGap}`}>

        {/* Heading full width */}
        <h2
          className={`${typography.heading} ${history.headingSize} ${history.headingWeight} ${history.headingMarginBottom} text-center w-full`}
          style={{ color: sectionColors.heading }}
        >
          HISTORY OF ALIF INTERNATIONAL SCHOOL
        </h2>

        {/* Content Row */}
        <div className={`w-full flex flex-col md:flex-row items-center ${history.contentGap}`}>

          {/* Left Paragraph */}
          <div className="w-full md:w-1/2 flex flex-col">
            <p
              className={`text-justify ${history.paragraphSize} ${history.paragraphLineHeight} ${history.paragraphMarginBottom}`}
              style={{ color: sectionColors.text }}
            >
              Alif International School has been renowned for its Academic
              Excellence since 2005. Knowledge, Discipline and 
              Perseverance are the corner stones on which this school was
              founded.<br /><br />

              The school is managed by the Board of Management
              comprising the Managing Director, Mr.Hussain Sadique, who
              supports the school as a pillar ever since inauguration, The
              Chairman Mr.Y.I.M.Hameez and Financial Director, Mr.Azeem 
              Ismail. They play a major role in uplifting and maintaining
              standards of the school.<br /><br />

              On the 25th of January 2005, the school commenced its 
              Primary section with 55 students and an academic staff of 07.
              Initially there were classes only until Grade 3. Mr.Y.I.M.Hafiz 
              took charge as the first Principal with deep interest and great sacrifice.
            </p>

            {/* Button */}
            <AboutButton
              text="READ MORE"
              className={`${history.buttonAlign} mt-4`}
              width={history.buttonWidth}
              onClick={() => router.push("/historyAlif")}
              colors={{
                buttonBg: sectionColors.buttonBg,
                buttonText: sectionColors.buttonText,
                buttonHoverBg: sectionColors.buttonHoverBg,
                buttonHoverText: sectionColors.buttonHoverText,
              }}
            />
          </div>

          {/* Right Image */}
       <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 cursor-pointer">
  <Image
    src="/assets/images/about us/sch pic.png"
    alt="School Image"
    width={500} // smaller width
    height={500} // smaller height
    style={{ objectFit: "cover" }}
    className="rounded transition-transform duration-300 hover:scale-105"
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default HistorySection;
