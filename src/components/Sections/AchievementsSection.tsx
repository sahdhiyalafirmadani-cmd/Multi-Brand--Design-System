"use client";

import React from "react";
import { useBrand } from "@/theme/use-brand";
import Link from "next/link";
import Button from "../primitives/Button/Button";

const AchievementsSection = () => {
  const { colors, spacing } = useBrand();
  const achievementsColors = colors.achievementsSection;
  const achievementsSpacing = spacing.sections.achievements;

  return (
    <section
      className={`${achievementsSpacing.sectionPaddingMobile} md:${achievementsSpacing.sectionPaddingDesktop} flex flex-col items-center justify-center`}
      style={{ backgroundColor: achievementsColors.bg }}
    >
      {/* Heading */}
      <h2
        className={`${achievementsSpacing.headingSizeMobile} ${achievementsSpacing.headingSizeDesktop} ${achievementsSpacing.headingWeight} ${achievementsSpacing.headingMarginBottom} ${achievementsSpacing.headingTextAlign}`}
        style={{ color: achievementsColors.heading }}
      >
        OUR SCHOOL ACHIEVEMENTS
      </h2>

      {/* Button */}
      <Link href="/achievements">
        <Button
          text="EXPLORE"
          colors={achievementsColors}
          className={`${achievementsSpacing.buttonWidthMobile} ${achievementsSpacing.buttonWidthDesktop}`}
        />
      </Link>
    </section>
  );
};

export default AchievementsSection;
