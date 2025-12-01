"use client";

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useBrand } from "@/theme/use-brand";

interface SearchOverlayProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ open, setOpen }) => {
  const { colors, typography, spacing } = useBrand();
  const overlayColors = colors.searchOverlay;

  const [query, setQuery] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setShowError(false);
    }
  }, [open]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) setShowError(true);
    else setShowError(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (showError && e.target.value.trim() !== "") setShowError(false);
  };

  if (!open) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[9999] flex flex-col justify-start ${spacing.paddingY[2]} ${spacing.paddingX[4]}`}
      style={{ backgroundColor: overlayColors.bg, minHeight: "8rem" }}
    >
      <div className="relative w-full flex justify-between items-start">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex items-center gap-2 flex-1">
          <button
            type="submit"
            className="p-2"
            style={{ color: overlayColors.icon }}
          >
            <FaSearch className="transition-colors duration-200 hover:cursor-pointer" />
          </button>

          <input
            type="text"
            placeholder="Search Here"
            value={query}
            onChange={handleChange}
            className={`flex-1 text-lg py-2 border-b focus:outline-none ${typography.body}`}
            style={{
              color: overlayColors.text,
              borderColor: overlayColors.border,
              padding: `${spacing.paddingY[1]} ${spacing.paddingX[2]}`,
            }}
          />
        </form>

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="text-3xl ml-4"
          style={{ color: overlayColors.icon }}
        >
          &times;
        </button>
      </div>

      {/* Error Tooltip */}
      {showError && (
        <div className="flex justify-center mt-2">
          <div
            className={`relative flex items-center rounded gap-2 ${spacing.paddingY[1]} ${spacing.paddingX[2]}`}
            style={{
              maxWidth: "350px",
              width: "90%",
              backgroundColor: overlayColors.errorBg,
              border: `1px solid ${overlayColors.errorBorder}`,
            }}
          >
            {/* Arrow */}
            <div
              className="absolute left-4 -top-2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent"
              style={{ borderBottomColor: overlayColors.errorBorder }}
            />
            <div
              className="absolute left-[15px] -top-[5px] w-0 h-0 border-l-[5px] border-r-[5px] border-b-[5px] border-l-transparent border-r-transparent"
              style={{ borderBottomColor: overlayColors.errorBg }}
            />

            {/* Error content */}
            <div
              className="w-5 h-5 flex items-center justify-center text-white font-bold rounded"
              style={{ backgroundColor: overlayColors.errorIconBg }}
            >
              !
            </div>
            <span style={{ color: overlayColors.errorText }}>
              Please fill out this field
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchOverlay;
