"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const BuildingCommitteeSection = () => {
  const { colors, spacing, typography } = useBrand();
  const s = spacing.sections.buildingCommitteeSection;
  const c = colors.buildingCommitteeSection;

  const [heading, setHeading] = useState("");
  const [members, setMembers] = useState<string[]>([]);
  const [appreciation, setAppreciation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/sheetData?sheet=aboutPage");
        const data = await res.json();
        if (!Array.isArray(data)) return;

        const get = (name: string) =>
          data.find((i: any) => i.componentName === name)?.value || "";

        setHeading(get("BuildingCommittee_Heading"));

        const memberNames = data
          .filter(
            (i: any) =>
              i.componentName && i.componentName.startsWith("BuildingCommittee_Member")
          )
          .map((i: any) => i.value || "");
        setMembers(memberNames);

        setAppreciation(get("BuildingCommittee_Appreciation"));
      } catch (error) {
        console.error("Error fetching Building Committee data:", error);
      }
    };

    fetchData();
  }, []);

  if (!heading) return null;

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.sectionBg }}>
      <div className={s.container}>
        {/* Heading */}
        <div className={s.headingWrapper}>
          <h2
            className={`${typography.heading} ${s.headingSize} ${s.headingWeight} ${s.headingMarginBottom}`}
            style={{ color: c.heading }}
          >
            {heading}
          </h2>
        </div>

        {/* Members */}
        <div className={s.membersGap}>
          {members.map((name, idx) => (
            <h3
              key={idx}
              className={`${typography.subheading} ${s.memberFont}`}
              style={{ color: c.memberText }}
            >
              {name}
            </h3>
          ))}
        </div>

        {/* Appreciation */}
        {appreciation && (
          <p
            className={`${typography.body} ${s.sentenceMarginTop}`}
            style={{ color: c.sentenceText }}
            dangerouslySetInnerHTML={{ __html: appreciation }}
          />
        )}
      </div>
    </section>
  );
};

export default BuildingCommitteeSection;
