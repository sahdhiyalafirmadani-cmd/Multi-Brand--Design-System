"use client";

import Image from "next/image";
import { useBrand } from "@/theme/use-brand";
import { useRouter } from "next/navigation";
import AboutButton from "@/components/primitives/Button/AboutButton";

const HistoryMontessoriSection = () => {
  const { colors, spacing, typography } = useBrand();
  const history = spacing.sections.historyMontessoriSection;
  const sectionColors = colors.historyMontessoriSection;
  const router = useRouter();

  return (
    <section
      className={`w-full ${history.sectionPadding}`}
      style={{ backgroundColor: sectionColors.bg }}
    >
      <div className={`max-w-7xl mx-auto flex flex-col items-center ${history.contentGap}`}>

        {/* Heading - Full width */}
        <h2
          className={`${typography.heading} ${history.headingSize} ${history.headingMarginBottom} text-center w-full`}
          style={{ color: sectionColors.heading }}
        >
          HISTORY OF ALIF MONTESSORI
        </h2>

        {/* Content Row */}
        <div className={`w-full flex flex-col md:flex-row items-center ${history.contentGap}`}>

          {/* Left Image */}
          <div className={`w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 cursor-pointer`}>
            <Image
              src="/assets/images/about us/montessori.jpg"
              alt="Montessori Image"
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
              className="rounded transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Paragraph + Button */}
          <div className="w-full md:w-1/2 flex flex-col mt-8 md:mt-0">
            <p
              className={`${typography.body} ${history.paragraphSize} ${history.paragraphMarginBottom} text-justify`}
              style={{ color: sectionColors.text }}
            >
              Alif International Montessori was the brainchild of a number of
              prominent businessmen from Dharga Town, who felt that there
              was a need for an English Medium School in the area.<br /><br />

              Former Chairman Mr. M.M.Nizam, Late Mr.M.Z.M.Zaheer, Mr.M.S.M.
              Faslan and Mr. M.R.M.M.Hussain Sadique were some of the
              efficient Directors who were in the forefront.<br /><br />

              The school was modeled by Mrs.Zulfica Marikar like PRE-OSC
              branch of the Overseas School of Colombo (oldest and only 
              accredited International School in Sri Lanka). The first recruited
              teachers who pioneered were Mrs.Insifa Imran and
              Mrs.Latheefa Faiz.<br /><br />

              Mr.Haniffa, the Manager of the school at the time did an
              efficient job. The Montessori started with 50 students and within 
              3 months the numbers rose to 100.
            </p>

            <AboutButton
              text="READ MORE"
              className={`${history.buttonAlign} mt-4`}
              width={history.buttonWidth} 
              onClick={() => router.push("/about/history-of-montessori")}
              colors={{
                buttonBg: sectionColors.buttonBg,
                buttonText: sectionColors.buttonText,
                buttonHoverBg: sectionColors.buttonHoverBg,
                buttonHoverText: sectionColors.buttonHoverText,
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HistoryMontessoriSection;
