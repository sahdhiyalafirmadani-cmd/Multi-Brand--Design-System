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
  const bannerColors = colors.banner;
  const bannerSpacing = spacing.sections.banner;

  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [...images, images[0]]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setTransition(true);
    }, bannerSpacing.slideInterval);
    return () => clearInterval(interval);
  }, [bannerSpacing.slideInterval]);

  useEffect(() => {
    if (current === slides.length - 1) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setCurrent(0);
      }, bannerSpacing.transitionDuration);
      return () => clearTimeout(timeout);
    }
  }, [current, slides.length, bannerSpacing.transitionDuration]);

  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: bannerColors.bg }}>
      {/* Slides */}
      <div
        ref={containerRef}
        className={`flex ${transition ? `transition-transform duration-[${bannerSpacing.transitionDuration}ms] ease-in-out` : ""}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div
            key={index}
            className="min-w-full relative"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 flex ${bannerSpacing.contentGap}`}>
        {images.map((_, index) => (
          <button
            key={index}
            className="w-4 h-4 rounded-full transition-colors"
            style={{
              backgroundColor:
                index === current % images.length
                  ? bannerColors.indicatorActive
                  : bannerColors.indicatorInactive,
            }}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Responsive Heights */}
      <style jsx>{`
        div.min-w-full {
          height: ${bannerSpacing.heightMobile};
        }
        @media (min-width: 768px) {
          div.min-w-full {
            height: ${bannerSpacing.heightTablet};
          }
        }
        @media (min-width: 1024px) {
          div.min-w-full {
            height: ${bannerSpacing.heightLaptop};
          }
        }
        @media (min-width: 1280px) {
          div.min-w-full {
            height: ${bannerSpacing.heightDesktop};
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
