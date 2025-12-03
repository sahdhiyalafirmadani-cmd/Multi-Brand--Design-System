"use client";

import Image from "next/image";
import { useBrand } from "@/theme/use-brand";

const AboutBanner = () => {
  const { spacing } = useBrand();
  const banner = spacing.sections.aboutBanner;

  return (
    <section className={`w-full ${banner.sectionPadding}`}>
      <div className={`w-full relative overflow-hidden ${banner.heightClasses}`}>
        <Image
          src="/assets/images/about us/about us.png"
          alt="About Us Banner"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }} // top-aligned
          priority
        />
      </div>
    </section>
  );
};

export default AboutBanner;
