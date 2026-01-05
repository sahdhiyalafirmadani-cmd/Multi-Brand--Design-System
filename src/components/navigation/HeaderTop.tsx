// File: src/components/navigation/HeaderTop.tsx
/*"use client";

import { useBrand } from "@/theme/use-brand";
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";


interface HeaderData {
  componentName: string;
  textLabel: string;
  value: string;
}

const HeaderTop = () => {
  const { colors, typography, spacing } = useBrand();
  const [data, setData] = useState<HeaderData[]>([]);
  const [hoverIcon, setHoverIcon] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/sheetData")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  const getValue = (name: string) =>
    data.find((item) => item.componentName === name)?.value || "";

  const brandColors = colors.brandTop;

  const iconStyle = (name: string) => ({
    color: hoverIcon === name ? brandColors.iconHover : brandColors.icon,
    transition: "color 0.3s",
  });

  return (
    <div
      className={`hidden md:flex ${spacing.paddingX[6]} ${spacing.paddingY[3]} justify-between items-center text-sm`}
      style={{
        backgroundColor: brandColors.bg,
        color: brandColors.text,
        fontFamily: typography.body,
      }}
    >
      {/* Contact Info 
      <div className={`flex ${spacing.gap[8]}`}>
        <div className={`flex items-center ${spacing.gap[2]}`}>
          <FaEnvelope
            size={18}
            style={iconStyle("email")}
            onMouseEnter={() => setHoverIcon("email")}
            onMouseLeave={() => setHoverIcon(null)}
          />
          <span>{getValue("HeaderTop_Email")}</span>
        </div>
        <div className={`flex items-center ${spacing.gap[2]}`}>
          <FaMapMarkerAlt
            size={18}
            style={iconStyle("location")}
            onMouseEnter={() => setHoverIcon("location")}
            onMouseLeave={() => setHoverIcon(null)}
          />
          <span>{getValue("HeaderTop_Location")}</span>
        </div>
        <div className={`flex items-center ${spacing.gap[2]}`}>
          <FaPhone
            size={18}
            style={iconStyle("phone")}
            onMouseEnter={() => setHoverIcon("phone")}
            onMouseLeave={() => setHoverIcon(null)}
          />
          <span>{getValue("HeaderTop_Phone")}</span>
        </div>
      </div>

      {/* Social Icons 
      <div className={`flex ${spacing.gap[6]} pr-10`}>
        <a
          href={getValue("HeaderTop_Facebook")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={24}
            style={iconStyle("facebook")}
            onMouseEnter={() => setHoverIcon("facebook")}
            onMouseLeave={() => setHoverIcon(null)}
          />
        </a>
        <a
          href={getValue("HeaderTop_Twitter")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaX
            size={24}
            style={iconStyle("twitter")}
            onMouseEnter={() => setHoverIcon("twitter")}
            onMouseLeave={() => setHoverIcon(null)}
          />
        </a>
        <a
          href={getValue("HeaderTop_Youtube")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube
            size={24}
            style={iconStyle("youtube")}
            onMouseEnter={() => setHoverIcon("youtube")}
            onMouseLeave={() => setHoverIcon(null)}
          />
        </a>
        <a
          href={getValue("HeaderTop_Instagram")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={24}
            style={iconStyle("instagram")}
            onMouseEnter={() => setHoverIcon("instagram")}
            onMouseLeave={() => setHoverIcon(null)}
          />
        </a>
      </div>
    </div>
  );
};

export default HeaderTop;*/

// File: src/components/navigation/HeaderTop.tsx
"use client";

import { useBrand } from "@/theme/use-brand";
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

interface HeaderData {
  componentName: string;
  textLabel: string;
  value: string;
}

const HeaderTop = () => {
  const { colors, typography, spacing } = useBrand();

  
  const [data, setData] = useState<HeaderData[]>([]);
  const [hoverIcon, setHoverIcon] = useState<string | null>(null);

 
  useEffect(() => {
    fetch("/api/sheetData")
      .then((res) => res.json())
      .then((result) => {
        if (Array.isArray(result)) {
          setData(result);
        } else if (Array.isArray(result?.data)) {
          setData(result.data);
        } else {
          console.error("HeaderTop: Invalid sheet data format", result);
          setData([]);
        }
      })
      .catch((err) => {
        console.error("HeaderTop fetch error:", err);
        setData([]);
      });
  }, []);

  
  const getValue = (name: string) => {
    if (!Array.isArray(data) || data.length === 0) return "";
    return data.find(
      (item) => item.componentName === name
    )?.value ?? "";
  };

  const brandColors = colors.brandTop;

  const iconStyle = (name: string) => ({
    color: hoverIcon === name ? brandColors.iconHover : brandColors.icon,
    transition: "color 0.3s",
  });

  return (
    <div
      className={`hidden md:flex ${spacing.paddingX[6]} ${spacing.paddingY[3]} justify-between items-center text-sm`}
      style={{
        backgroundColor: brandColors.bg,
        color: brandColors.text,
        fontFamily: typography.body,
      }}
    >
      {/* Contact Info */}
      <div className={`flex ${spacing.gap[8]}`}>
        <div className={`flex items-center ${spacing.gap[2]}`}>
          <FaEnvelope
            size={18}
            style={iconStyle("email")}
            onMouseEnter={() => setHoverIcon("email")}
            onMouseLeave={() => setHoverIcon(null)}
          />
          <span>{getValue("HeaderTop_Email")}</span>
        </div>

        <div className={`flex items-center ${spacing.gap[2]}`}>
          <FaMapMarkerAlt
            size={18}
            style={iconStyle("location")}
            onMouseEnter={() => setHoverIcon("location")}
            onMouseLeave={() => setHoverIcon(null)}
          />
          <span>{getValue("HeaderTop_Location")}</span>
        </div>

        <div className={`flex items-center ${spacing.gap[2]}`}>
          <FaPhone
            size={18}
            style={iconStyle("phone")}
            onMouseEnter={() => setHoverIcon("phone")}
            onMouseLeave={() => setHoverIcon(null)}
          />
          <span>{getValue("HeaderTop_Phone")}</span>
        </div>
      </div>

      {/* Social Icons */}
      <div className={`flex ${spacing.gap[6]} pr-10`}>
        <a
          href={getValue("HeaderTop_Facebook")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={24}
            style={iconStyle("facebook")}
            onMouseEnter={() => setHoverIcon("facebook")}
            onMouseLeave={() => setHoverIcon(null)}
          />
        </a>

        <a
          href={getValue("HeaderTop_Twitter")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaX
            size={24}
            style={iconStyle("twitter")}
            onMouseEnter={() => setHoverIcon("twitter")}
            onMouseLeave={() => setHoverIcon(null)}
          />
        </a>

        <a
          href={getValue("HeaderTop_Youtube")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube
            size={24}
            style={iconStyle("youtube")}
            onMouseEnter={() => setHoverIcon("youtube")}
            onMouseLeave={() => setHoverIcon(null)}
          />
        </a>

        <a
          href={getValue("HeaderTop_Instagram")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={24}
            style={iconStyle("instagram")}
            onMouseEnter={() => setHoverIcon("instagram")}
            onMouseLeave={() => setHoverIcon(null)}
          />
        </a>
      </div>
    </div>
  );
};

export default HeaderTop;

