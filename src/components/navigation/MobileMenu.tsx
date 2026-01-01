"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useBrand } from "@/theme/use-brand";

interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface NavItem {
  label: string;
  href: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, setOpen }) => {
  const { colors, typography, spacing } = useBrand();
  const menuColors = colors.mobileMenu;

  const [logo, setLogo] = useState("");
  const [navItems, setNavItems] = useState<NavItem[]>([]);

  /* ================= FETCH FROM GOOGLE SHEET ================= */
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=headerUpper");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      const getValue = (name: string) =>
        data.find((i: any) => i.componentName === name)?.value || "";

      // Logo
      setLogo(getValue("Header_Logo"));

      // Nav items
      const rawItems = getValue("Header_NavItems");
      const parsedItems = rawItems
        ? rawItems.split(";").map((item: string) => {
            const [label, href] = item.split(",");
            return {
              label: label.trim(),
              href: href.trim(),
            };
          })
        : [];

      setNavItems(parsedItems);
    };

    fetchData();
  }, []);

  /* ================= LOCK SCROLL ================= */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: menuColors.overlayBg }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />

          {/* Sliding Menu */}
          <motion.div
            className="fixed top-0 right-0 z-50 h-full flex flex-col shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              width: "75%",
              maxWidth: "400px",
              backgroundColor: menuColors.bg,
            }}
          >
            {/* Logo + Close */}
            <div
              className={`flex items-center justify-between ${spacing.paddingY[3]} ${spacing.paddingX[4]} border-b`}
              style={{ borderColor: colors.headerUpper.bg }}
            >
              {logo && (
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image
                    src={logo}
                    alt="School Logo"
                    width={120}
                    height={50}
                    className="object-contain"
                  />
                </Link>
              )}

              <button
                onClick={() => setOpen(false)}
                className="text-2xl p-2 rounded transition"
                style={{ color: menuColors.text }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    menuColors.closeHoverBg)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu Items */}
            <nav
              className={`flex flex-col ${spacing.paddingY[3]} ${spacing.paddingX[4]} ${spacing.gap[4]}`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-medium text-lg cursor-pointer transition-colors ${typography.body}`}
                  style={{ color: menuColors.text }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = menuColors.textHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = menuColors.text)
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
