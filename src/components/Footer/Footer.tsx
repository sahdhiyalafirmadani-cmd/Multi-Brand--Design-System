"use client";

import React, { useState } from "react";
import { useBrand } from "@/theme/use-brand";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const { colors, spacing } = useBrand();
  const footerColors = colors.footerSection;
  const footerSpacing = spacing.sections.footerSection;

  const links = [
    "About Us",
    "Achievements",
    "Events",
    "Calendar",
    "Gallery",
    "Careers",
    "Contact Us",
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <footer>
      {/* ================= TOP SECTION ================ */}
      <div
        className={`${footerSpacing.topSectionPadding}`}
        style={{ backgroundColor: footerColors.bgTop }}
      >
        <div className={`${footerSpacing.container} grid grid-cols-1 md:grid-cols-3 ${footerSpacing.sectionGap}`}>
          {/* ------------ LEFT SIDE (Logo + Address) -------------- */}
          <div className="flex flex-col gap-3">
            <img
              src="/assets/images/school logo.png"
              alt="School Logo"
              className={`${footerSpacing.logoSize} transition duration-300`}
            />
            <h2
              className={`${footerSpacing.headingSize} ${footerSpacing.headingWeight}`}
              style={{ color: footerColors.heading }}
            >
              ALIF INTERNATIONAL SCHOOL
            </h2>
            <p style={{ color: footerColors.text }}>
              ADDRESS - 88/18A, ALAVIYA ROAD, DHARGA TOWN, SRI LANKA.
            </p>
            <p style={{ color: footerColors.text }}>TELL - +94 77 012 9676</p>

            {/* Social Icons */}
            <div className={`${footerSpacing.socialIconsGap}`}>
              {[FaFacebookF, FaXTwitter, FaYoutube, FaInstagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                  style={{ backgroundColor: footerColors.iconBg }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor =
                      footerColors.iconHoverBg)
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor =
                      footerColors.iconBg)
                  }
                >
                  <Icon className={`${footerSpacing.iconSize} text-white`} />
                </div>
              ))}
            </div>
          </div>

          {/* ---------------- MIDDLE LINKS ---------------- */}
          <div className={`${footerSpacing.linksAlign}`}>
            <h4
              className={`${footerSpacing.linksHeadingSize} ${footerSpacing.linksHeadingWeight} mb-5`}
              style={{ color: footerColors.heading }}
            >
              Links
            </h4>
            <ul className={`${footerSpacing.linksGap} inline-block`}>
              {links.map((link, index) => (
                <li
                  key={index}
                  className="relative group cursor-pointer flex items-center justify-center md:justify-start"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span
                    className="inline-block transition-all duration-300 group-hover:translate-x-5"
                    style={{
                      color: hoveredIndex === index ? footerColors.linkHover : footerColors.link,
                    }}
                  >
                    {link}
                  </span>
                  <span
                    className="absolute left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 flex items-center justify-center w-4 h-4 rounded-full opacity-0 
                               group-hover:opacity-100 transition-all duration-300"
                    style={{ backgroundColor: footerColors.linkHover }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2.5 h-2.5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- RIGHT MESSAGE ---------------- */}
          <div>
            <h4
              className={`${footerSpacing.messageHeadingSize} ${footerSpacing.messageHeadingWeight} mb-5`}
              style={{ color: footerColors.heading }}
            >
              Inspiration
            </h4>
            <p className="leading-relaxed" style={{ color: footerColors.text }}>
              Where education meets excellence, we empower minds to soar,
              unlocking limitless potential and shaping tomorrow’s leaders with
              knowledge, passion, and innovation. Together, we achieve
              greatness.
            </p>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================ */}
      <div
        className={`${footerSpacing.bottomSectionPadding} text-center ${footerSpacing.bottomTextSize}`}
        style={{ backgroundColor: footerColors.bgBottom }}
      >
        <hr
          className="mb-4"
          style={{
            borderColor: footerColors.divider,
            width: "90%",
            marginInline: "auto",
          }}
        />
        <p style={{ color: footerColors.text }}>
          © 2023 Alif International School. All rights reserved. |
          <span className="cursor-pointer" style={{ color: footerColors.linkHover }}>
            {" "}
            Privacy Policy{" "}
          </span>
          |{" "}
          <span className="cursor-pointer" style={{ color: footerColors.linkHover }}>
            Terms of Service
          </span>
          <br />
          <span style={{ color: footerColors.linkHover }}>Site Developed By: LMRS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
