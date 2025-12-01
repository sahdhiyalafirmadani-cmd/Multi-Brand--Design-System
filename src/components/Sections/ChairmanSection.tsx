"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBrand } from "@/theme/use-brand";
import Button from "../primitives/Button/Button";

export default function ChairmanSection() {
  const router = useRouter();
  const { colors, spacing } = useBrand();
  const chairmanColors = colors.chairmanSection;
  const chairmanSpacing = spacing.sections.chairman;

  return (
    <section
      className={`${chairmanSpacing.sectionPaddingMobile} md:${chairmanSpacing.sectionPaddingDesktop}`}
      style={{ backgroundColor: chairmanColors.bg }}
    >
      <div className={`max-w-6xl mx-auto grid md:grid-cols-2 ${chairmanSpacing.containerGap} items-center`}>

        {/* LEFT TEXT */}
        <div>
          <h2
            className={`${chairmanSpacing.headingSizeMobile} ${chairmanSpacing.headingSizeDesktop} ${chairmanSpacing.headingWeight} ${chairmanSpacing.headingMarginBottom}`}
            style={{ color: chairmanColors.heading }}
          >
            MESSAGE FROM OUR CHAIRMAN
          </h2>

          <p
            className={`${chairmanSpacing.paragraphLineHeight} ${chairmanSpacing.paragraphMarginBottom} text-justify`}
            style={{ color: chairmanColors.text }}
          >
            In the name of Allah the Most Beneficent the Most Merciful.
            <br /><br />
            It is with immense pleasure and gratitude that I welcome you to the
            official website of Alif International School.
            <br /><br />
            Alif International School is a project of the Alif Education
            Foundation. The mission of the Foundation in establishing an
            international school is to provide a modern English medium
            education of high standard at an affordable cost.
            <br /><br />
            From its inception, Alif has been striving to maintain the highest
            educational standards whilst imparting the right values as well as
            equipping the students with the necessary skills to face the
            challenges of the modern world with courage and fortitude.
          </p>

          <div className={chairmanSpacing.buttonGap}>
            <Button
              text="READ MORE"
              colors={chairmanColors}
              onClick={() => router.push("/chairman")}
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/chairman.jpeg"
            alt="Chairman"
            width={chairmanSpacing.imageWidth}
            height={chairmanSpacing.imageHeight}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
