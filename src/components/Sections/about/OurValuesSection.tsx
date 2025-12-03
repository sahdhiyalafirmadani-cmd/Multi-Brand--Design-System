"use client";

import { useBrand } from "@/theme/use-brand";
import Image from "next/image";

const OurValuesSection = () => {
  const { spacing, colors } = useBrand();
  const section = spacing.sections.ourValuesSection;
  const sectionColors = colors.ourValuesSection;

  return (
    <section
      className={`w-full ${section.sectionPadding}`}
      style={{ backgroundColor: sectionColors.sectionBg }}
    >
      <div className={`${section.containerMaxWidth} flex flex-col md:flex-row justify-center ${section.containerGap}`}>

        {["Our Motto", "Our Mission", "Our Vision"].map((title, index) => (
          <div
            key={index}
            className={`${section.boxWidth} ${section.boxPadding} ${section.boxBorderRadius} flex flex-col items-center ${section.boxGap} relative overflow-hidden transform transition-transform duration-300 
                        hover:scale-105 active:scale-105 focus:scale-105 group`}
            style={{ backgroundColor: sectionColors.boxBg }}
          >
            {/* Background Logo */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <Image
                src="/assets/images/school logo.png"
                alt="Logo"
                fill
                style={{
                  objectFit: "contain",
                  opacity: section.logo.opacity,
                  transition: section.logo.transition,
                }}
                className="group-hover:scale-110 group-active:scale-110 group-focus:scale-110"
              />
            </div>

            {/* Heading */}
            <h2
              className={`${section.headingFont} relative z-10 text-center`}
              style={{ color: sectionColors.heading }}
            >
              {title}
            </h2>

            {/* Content */}
            <div className="relative z-10 text-center">
              {title === "Our Motto" && (
                <div className="flex flex-col mt-0 md:mt-6 space-y-1">
                  <p className={section.textFont}>Knowledge</p>
                  <p className={section.textFont}>Discipline</p>
                  <p className={section.textFont}>Through Perseverance</p>
                </div>
              )}
              {title === "Our Mission" && (
                <p className={`${section.textFont} mt-4`}>
                  To provide a ‘total education’ which would<br />
                  help to provide physically, socially,<br />
                  intellectually and morally developed citizens,<br />
                  who would find unity in diversity and achieve<br />
                  self realization by being pragmatic,<br />
                  productive and useful to society.
                </p>
              )}
              {title === "Our Vision" && (
                <p className={`${section.textFont} mt-4`}>
                  To be the foremost private Education<br />
                  Institute in the region, providing quality<br />
                  education, at an affordable rate; capable of<br />
                  guiding students to be successful global<br />
                  citizens, with a strong spiritual base.
                </p>
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default OurValuesSection;
