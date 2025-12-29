// File: src/components/navigation/HeaderUpper.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import SearchOverlay from "../primitives/SearchOverlay";
import MobileMenu from "./MobileMenu";
import { useBrand } from "@/theme/use-brand";


const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Events", href: "/events" },
  { label: "Calendar", href: "/calendar" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const HeaderUpper = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { colors, typography, spacing } = useBrand();
  const headerColors = colors.headerUpper;

  return (
    <>
      <SearchOverlay open={searchOpen} setOpen={setSearchOpen} />

      <div
        className="sticky top-0 z-50 shadow-md"
        style={{
          backgroundColor: headerColors.bg,
          color: headerColors.text,
          fontFamily: typography.heading,
        }}
      >
        <div
          className={`max-w-7xl mx-auto ${spacing.paddingX[4]} ${spacing.paddingY[3]} flex justify-between items-center`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/images/school logo.png"
                alt="School Logo"
                width={95}
                height={95}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex gap-8 font-medium text-[18px]`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{ color: headerColors.text }}
                className="transition-colors hover:underline"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = headerColors.textHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = headerColors.text)
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search & Mobile */}
          <div className={`flex items-center ${spacing.gap[4]}`}>
            <button
              onClick={() => setSearchOpen(true)}
              className="p-3 rounded-full transition"
              style={{
                backgroundColor: headerColors.searchBg,
                color: headerColors.searchIcon,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = headerColors.searchHoverBg;
                e.currentTarget.style.color = headerColors.searchIconHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = headerColors.searchBg;
                e.currentTarget.style.color = headerColors.searchIcon;
              }}
            >
              <FaSearch size={17} />
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-3 text-2xl"
              style={{ color: headerColors.text }}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} navItems={navItems} />
    </>
  );
};

export default HeaderUpper;
