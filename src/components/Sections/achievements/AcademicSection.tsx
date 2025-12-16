"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const AcademicSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.achievementsAcademic;
  const c = colors.achievementsAcademic;

  const [headings, setHeadings] = useState<{ main?: string; sub?: string }>({});
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=achievementsPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      setHeadings({
        main: data.find((i: any) => i.componentName === "AcademicAchievements_MainHeading")?.value || "",
        sub: data.find((i: any) => i.componentName === "AcademicAchievements_SubHeading")?.value || "",
      });

      // Table headers
      setTableHeaders(
        data
          .filter((i: any) => i.componentName === "AcademicAchievements_TableHeader")
          .map((i: any) => i.value || "")
      );

      // Table rows – safe, editable
      const tableRows = data
        .filter((i: any) => i.componentName === "AcademicAchievements_Row")
        .map((i: any) => {
          if (!i.value) return []; // skip empty
          return i.value.split("|").map((v: string) => v.trim());
        })
        .filter(row => row.length > 0); // remove empty rows

      setRows(tableRows);
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className="container mx-auto flex flex-col items-center">
        {/* Headings */}
        <div className={`${s.headingWrapper} ${s.headingGap}`}>
          <h1 className={`${s.headingSize} ${s.headingWeight}`} style={{ color: c.heading }}>
            {headings.main}
          </h1>
          <h1 className={`${s.headingSize} ${s.headingWeight}`} style={{ color: c.heading }}>
            {headings.sub}
          </h1>
        </div>

        {/* Table */}
        <div className={s.tableWrapper}>
          <div className={s.tableContainer}>
            <table className={s.tableWidth} style={{ borderColor: c.tableBorder }}>
              <thead style={{ backgroundColor: c.tableHeaderBg }}>
                <tr>
                  {tableHeaders.map((head, i) => (
                    <th
                      key={i}
                      className={`${s.cellPadding} ${s.cellText} text-left border`}
                      style={{ color: c.tableHeaderText, borderColor: c.tableBorder }}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, rIndex) => (
                  <tr key={rIndex}>
                    {row.map((cell, cIndex) => (
                      <td
                        key={cIndex}
                        className={`${s.cellPadding} ${s.cellText} text-left border whitespace-nowrap`}
                        style={{ color: c.tableRowText, borderColor: c.tableBorder }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
