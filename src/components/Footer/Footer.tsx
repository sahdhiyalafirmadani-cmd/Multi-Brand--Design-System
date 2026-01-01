"use client";

import React, { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

interface FooterData {
  logo: string;
  schoolName: string;
  address: string;
  phone: string;
  social: { facebook: string; instagram: string; twitter: string; youtube: string };
  links: { text: string; url: string }[];
  inspirationHeading: string;
  inspirationText: string;
  copyright: string;
  privacy: string;
  terms: string;
  developer: string;
}

const Footer: React.FC = () => {
  const { colors, spacing } = useBrand();
  const s = spacing.sections.footerSection;
  const c = colors.footerSection;

  const [data, setData] = useState<FooterData | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=footer");
      const sheetData = await res.json();
      if (!Array.isArray(sheetData)) return;

      const get = (name: string) =>
        sheetData.find((i: any) => i.componentName === name)?.value || "";

      const linksRaw = get("Footer_Links").split(";").map((item: string) => {
        const [text, url] = item.split(",");
        return { text: text?.trim() || "", url: url?.trim() || "#" };
      });

      setData({
        logo: get("Footer_Logo"),
        schoolName: get("Footer_SchoolName"),
        address: get("Footer_Address"),
        phone: get("Footer_Phone"),
        social: {
          facebook: get("Footer_Social_Facebook"),
          instagram: get("Footer_Social_Instagram"),
          twitter: get("Footer_Social_Twitter"),
          youtube: get("Footer_Social_YouTube"),
        },
        links: linksRaw,
        inspirationHeading: get("Footer_InspirationHeading"),
        inspirationText: get("Footer_InspirationText"),
        copyright: get("Footer_Copyright"),
        privacy: get("Footer_Privacy"),
        terms: get("Footer_Terms"),
        developer: get("Footer_Developer"),
      });
    };

    fetchData();
  }, []);

  if (!data) return null;

  const socialIcons = [
    { Icon: FaFacebookF, url: data.social.facebook },
    { Icon: FaXTwitter, url: data.social.twitter },
    { Icon: FaYoutube, url: data.social.youtube },
    { Icon: FaInstagram, url: data.social.instagram },
  ];

  return (
    <footer>
      {/* ================= TOP SECTION ================ */}
      <div className={s.topSectionPadding} style={{ backgroundColor: c.bgTop }}>
        <div className={`${s.container} grid grid-cols-1 md:grid-cols-3 ${s.sectionGap}`}>

          {/* LEFT SIDE (Logo + Address) */}
          <div className="flex flex-col gap-3">
            {data.logo && <img src={data.logo} alt="Logo" className={s.logoSize} />}
            <h2 className={`${s.headingSize} ${s.headingWeight}`} style={{ color: c.heading }}>
              {data.schoolName}
            </h2>
            <p style={{ color: c.text }}>{data.address}</p>
            <p style={{ color: c.text }}>{data.phone}</p>

            {/* Social Icons */}
            <div className={s.socialIconsGap}>
              {socialIcons.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: c.iconBg }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = c.iconHoverBg)
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = c.iconBg)
                  }
                >
                  <Icon className={s.iconSize + " text-white"} />
                </a>
              ))}
            </div>
          </div>

          {/* MIDDLE LINKS */}
          <div className={s.linksAlign}>
            <h4 className={`${s.linksHeadingSize} ${s.linksHeadingWeight} mb-5`} style={{ color: c.heading }}>
              Links
            </h4>
            <ul className={s.linksGap}>
              {data.links.map((link, index) => (
                <li
                  key={index}
                  className="relative group cursor-pointer flex items-center justify-center md:justify-start"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={link.url}
                    className="inline-block transition-all duration-300 group-hover:translate-x-5"
                    style={{
                      color: hoveredIndex === index ? c.linkHover : c.link,
                    }}
                  >
                    {link.text}
                  </a>
                  <span
                    className="absolute left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 flex items-center justify-center w-4 h-4 rounded-full opacity-0 
                               group-hover:opacity-100 transition-all duration-300"
                    style={{ backgroundColor: c.linkHover }}
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

          {/* RIGHT MESSAGE */}
          <div>
            <h4 className={`${s.messageHeadingSize} ${s.messageHeadingWeight} mb-5`} style={{ color: c.heading }}>
              {data.inspirationHeading}
            </h4>
            <p className="leading-relaxed" style={{ color: c.text }}>
              {data.inspirationText}
            </p>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================ */}
      <div className={`${s.bottomSectionPadding} text-center ${s.bottomTextSize}`} style={{ backgroundColor: c.bgBottom }}>
        <hr className="mb-4" style={{ borderColor: c.divider, width: "90%", marginInline: "auto" }} />
        <p style={{ color: c.text }}>
          {data.copyright} |{" "}
          <span className="cursor-pointer" style={{ color: c.linkHover }}>
            {data.privacy}
          </span>{" "}
          |{" "}
          <span className="cursor-pointer" style={{ color: c.linkHover }}>
            {data.terms}
          </span>
          <br />
          <span style={{ color: c.linkHover }}>{data.developer}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
