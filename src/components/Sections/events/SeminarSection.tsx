"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const SeminarSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.eventsSeminar;
  const c = colors.eventsSeminar;

  const [mainHeading, setMainHeading] = useState("");
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=eventsPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      setMainHeading(
        data.find((i: any) => i.componentName === "Events_Seminar_MainHeading")?.value || ""
      );

      setHeaders(
        data
          .filter((i: any) => i.componentName === "Events_Seminar_TableHeader")
          .map((i: any) => i.value.split("|").map((v: string) => v.trim())[0]) // first split for safety
      );

      setRows(
        data
          .filter((i: any) => i.componentName === "Events_Seminar_Row")
          .map((i: any) => i.value.split("|").map((v: string) => v.trim()))
      );
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      {/* MAIN HEADING */}
      <div className={s.headingWrapper}>
        <h1 className={s.headingSize} style={{ color: c.heading }}>
          {mainHeading}
        </h1>
      </div>

      {/* TABLE */}
      <div className={s.tableWrapper}>
        <div className={s.tableContainer}>
          <table className={s.table} style={{ borderColor: c.tableBorder }}>
            <thead style={{ backgroundColor: c.tableHeaderBg }}>
              <tr>
                {["DATE", "SUBJECT", "RESOURCE PERSON"].map((h, i) => (
                  <th
                    key={i}
                    className={`${s.cellPadding} ${s.cellText} border`}
                    style={{ color: c.tableHeaderText, borderColor: c.tableBorder }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`${s.cellPadding} ${s.cellText} border`}
                      style={{ color: c.tableText, borderColor: c.tableBorder }}
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SeminarSection;
