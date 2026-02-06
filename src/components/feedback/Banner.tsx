"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useBrand } from "@/theme/use-brand";

const Banner = () => {
  const { colors, spacing } = useBrand();

  const bannerColors = colors?.banner;
  const bannerSpacing = spacing?.sections?.banner;

  const [images, setImages] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  /* ================= FETCH FROM GOOGLE SHEET ================= */
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/sheetData?sheet=homePage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      const bannerImages = data
        .filter(
          (i: any) =>
            typeof i.componentName === "string" &&
            i.componentName.startsWith("Banner_Image_")
        )
        .map((i: any) => i.value)
        .filter(Boolean);

      setImages(bannerImages);
    };

    fetchImages();
  }, []);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((p) => p + 1);
      setTransition(true);
    }, bannerSpacing.slideInterval);

    return () => clearInterval(timer);
  }, [images.length, bannerSpacing.slideInterval]);

  /* ================= LOOP RESET ================= */
  useEffect(() => {
    if (images.length === 0) return;

    if (current === images.length) {
      const t = setTimeout(() => {
        setTransition(false);
        setCurrent(0);
      }, bannerSpacing.transitionDuration);

      return () => clearTimeout(t);
    }
  }, [current, images.length, bannerSpacing.transitionDuration]);

  /* ================= SAFE GUARD ================= */
  if (!bannerColors || !bannerSpacing || images.length === 0) {
    return null;
  }
  /*if (!bannerColors || !bannerSpacing || images.length === 0) {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{
        height: bannerSpacing?.heightMobile || "200px",
        backgroundColor: bannerColors?.bg || "#f5f5f5",
      }}
    >
      <p style={{ opacity: 0.6 }}>Loading banner...</p>
    </div>
  );
}*/

  const slides = [...images, images[0]];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: bannerColors.bg,
        ["--h-mobile" as any]: bannerSpacing.heightMobile,
        ["--h-tablet" as any]: bannerSpacing.heightTablet,
        ["--h-laptop" as any]: bannerSpacing.heightLaptop,
        ["--h-desktop" as any]: bannerSpacing.heightDesktop,
      }}
    >
      {/* SLIDER */}
      <div
        className={`flex ${
          transition
            ? `transition-transform duration-[${bannerSpacing.transitionDuration}ms] ease-in-out`
            : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div key={index} className="min-w-full relative banner-slide-wrapper">
            <Image
              src={src}
              alt={`Banner Slide ${index + 1}`}
              fill
              className="banner-img"
              priority
            />
          </div>
        ))}
      </div>

      {/* INDICATORS */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex ${bannerSpacing.contentGap}`}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full transition-all"
            style={{
              backgroundColor:
                index === current % images.length
                  ? bannerColors.indicatorActive
                  : bannerColors.indicatorInactive,
            }}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* RESPONSIVE HEIGHT FIXES */}
      <style jsx>{`
        .banner-slide-wrapper {
          height: var(--h-mobile);
          min-height: var(--h-mobile);
        }

        @media (max-width: 360px) {
          .banner-img {
            object-fit: contain !important;
            background-color: ${bannerColors.bg};
          }
          .banner-slide-wrapper {
            height: calc(var(--h-mobile) + 60px);
          }
        }

        @media (min-width: 640px) {
          .banner-slide-wrapper {
            height: var(--h-tablet);
          }
        }

        @media (min-width: 1024px) {
          .banner-slide-wrapper {
            height: var(--h-laptop);
          }
        }

        @media (min-width: 1280px) {
          .banner-slide-wrapper {
            height: var(--h-desktop);
          }
        }

        .banner-img {
          object-fit: cover;
        }

        @media (max-height: 550px) {
          .banner-slide-wrapper {
            height: 65vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
