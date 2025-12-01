"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useBrand } from "@/theme/use-brand";

const images = [
  "/assets/images/1.png",
  "/assets/images/2.png",
  "/assets/images/3.png",
];

const Banner = () => {
  const { colors, spacing } = useBrand();

  const bannerColors = colors?.banner;
  const bannerSpacing = spacing?.sections?.banner;

  if (!bannerColors || !bannerSpacing) return null;

  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  const slides = [...images, images[0]];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => p + 1);
      setTransition(true);
    }, bannerSpacing.slideInterval);
    return () => clearInterval(timer);
  }, [bannerSpacing.slideInterval]);

  // Loop reset
  useEffect(() => {
    if (current === slides.length - 1) {
      const t = setTimeout(() => {
        setTransition(false);
        setCurrent(0);
      }, bannerSpacing.transitionDuration);
      return () => clearTimeout(t);
    }
  }, [current, slides.length, bannerSpacing.transitionDuration]);

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
              alt={`Slide ${index}`}
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

      {/* RESPONSIVE HEIGHT + FIX FOR TINY DEVICES */}
      <style jsx>{`
        /* Default mobile height */
        .banner-slide-wrapper {
          height: var(--h-mobile);
          min-height: var(--h-mobile);
        }

        /* Fix tiny devices (320px width or less) */
        @media (max-width: 360px) {
          .banner-img {
            object-fit: contain !important;
            background-color: ${bannerColors.bg};
          }
          .banner-slide-wrapper {
            height: calc(var(--h-mobile) + 60px);
          }
        }

        /* Tablet */
        @media (min-width: 640px) {
          .banner-slide-wrapper {
            height: var(--h-tablet);
          }
        }

        /* Laptop */
        @media (min-width: 1024px) {
          .banner-slide-wrapper {
            height: var(--h-laptop);
          }
        }

        /* Desktop */
        @media (min-width: 1280px) {
          .banner-slide-wrapper {
            height: var(--h-desktop);
          }
        }

        /* MAIN IMAGE BEHAVIOR */
        .banner-img {
          object-fit: cover;
        }

        /* Very small height screens (landscape phones) */
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

