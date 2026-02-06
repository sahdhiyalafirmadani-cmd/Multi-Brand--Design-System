"use client";

import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import SearchOverlay from "../primitives/SearchOverlay";
import MobileMenu from "./MobileMenu";
import { useBrand } from "@/theme/use-brand";

const HeaderUpper = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logo, setLogo] = useState("");
  const [navItems, setNavItems] = useState<{ label: string; href: string }[]>([]);

  const { colors, typography, spacing } = useBrand();
  const headerColors = colors.headerUpper;
  const s = spacing.sections.headerUpper;

  const params = useParams();
  const brand = params?.brand || "alif"; // fallback brand if missing

  // Fetch Google Sheet content
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=headerUpper");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      const get = (name: string) => data.find((i: any) => i.componentName === name)?.value || "";

      setLogo(get("Header_Logo"));

      const itemsRaw = get("Header_NavItems");
      const itemsArray = itemsRaw
        ? itemsRaw.split(";").map((i: string) => {
            const [label, href] = i.split(",");
            return { label: label.trim(), href: `/${brand}${href.trim()}` }; // PREPEND BRAND HERE
          })
        : [];
      setNavItems(itemsArray);
    };

    fetchData();
  }, [brand]); // rerun if brand changes

  return (
    <>
      <SearchOverlay open={searchOpen} setOpen={setSearchOpen} />

      <div
        className={`sticky top-0 z-50 shadow-md ${s.wrapper}`}
        style={{ backgroundColor: headerColors.bg, color: headerColors.text, fontFamily: typography.heading }}
      >
        <div className={`mx-auto flex justify-between items-center ${s.container}`}>
          {/* Logo */}
          <div className={s.logoWrapper}>
            {logo && (
              <Link href={`/${brand}`}>
                <Image src={logo} alt="School Logo" width={s.logoWidth} height={s.logoHeight} className="object-contain" />
              </Link>
            )}
          </div>

          {/* Desktop Nav */}
          <nav className={`${s.navDesktop}`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${s.navItem} transition-colors`}
                style={{ color: headerColors.text }}
                onMouseEnter={(e) => (e.currentTarget.style.color = headerColors.textHover)}
                onMouseLeave={(e) => (e.currentTarget.style.color = headerColors.text)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search & Mobile */}
          <div className={`${s.rightControls}`}>
            <button
              onClick={() => setSearchOpen(true)}
              className={`${s.searchButton} rounded-full transition`}
              style={{ backgroundColor: headerColors.searchBg, color: headerColors.searchIcon }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = headerColors.searchHoverBg;
                e.currentTarget.style.color = headerColors.searchIconHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = headerColors.searchBg;
                e.currentTarget.style.color = headerColors.searchIcon;
              }}
            >
              <FaSearch size={s.searchIconSize} />
            </button>

            <button onClick={() => setMobileOpen(true)} className={s.mobileButton} style={{ color: headerColors.text }}>
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
