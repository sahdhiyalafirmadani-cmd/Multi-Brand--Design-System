"use client";

import React from "react";
import Button from "../primitives/Button/Button";
import { useBrand } from "@/theme/use-brand";

const MadamSection = () => {
  const { colors } = useBrand();
  const madamColors = colors.messageFromMadam;

  return (
    <section className="py-12" style={{ backgroundColor: madamColors.bg }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Madam Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/assets/images/madam.png"
            alt="Madam Principal"
            className="rounded-lg shadow-lg max-w-full h-auto transform transition-transform duration-300 hover:scale-105 active:scale-110"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: madamColors.heading }}
          >
            MESSAGE FROM OUR MADAM PRINCIPAL
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed mb-6 text-justify"
            style={{ color: madamColors.text }}
          >
            Dear Students, Parents, Past Pupils and Well wishers,
            <br /><br />
            It gives me great pleasure to welcome you all to the Alif International School and Montessori website.
            <br /><br />
            “Knowledge, Discipline through Perseverance.” Just as the above Motto indicates, the ability to persist in the face of adversity and to continue working towards a goal despite obstacles and setbacks, our school provides opportunities and allows individuals to overcome challenges to achieve their goals and to make progress in their personal and professional lives. We believe in giving our students strong values with a set of wings which may carry them far and wide. The activities of the school provide holistic grooming so that they are able to explore their own potential.
          </p>

          <div className="flex justify-center md:justify-start">
            <Button
              text="READ MORE"
              onClick={() => (window.location.href = "/message-from-madam")}
              colors={madamColors}
              className="w-40 md:w-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadamSection;
