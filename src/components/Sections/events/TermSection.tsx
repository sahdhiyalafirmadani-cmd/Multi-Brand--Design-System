"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const TermSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.eventsTerm;
  const c = colors.eventsTerm;

  const [heading, setHeading] = useState("");
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=eventsPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      setHeading(
        data.find(
          (i: any) => i.componentName === "Events_Term_MainHeading"
        )?.value || ""
      );

      setHeaders(
        data
          .filter((i: any) => i.componentName === "Events_Term_TableHeader")
          .map((i: any) => i.value)
      );

      setRows(
        data
          .filter((i: any) => i.componentName === "Events_Term_Row")
          .map((i: any) =>
            i.value.split("|").map((v: string) => v.trim())
          )
      );
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      {/* HEADING */}
      <div className={s.headingWrapper}>
        <h1 className={s.headingSize} style={{ color: c.heading }}>
          {heading}
        </h1>
      </div>

      {/* TABLE */}
      <div className={s.tableWrapper}>
        <div className={s.tableContainer}>
          <table className={s.table} style={{ borderColor: c.tableBorder }}>
            <thead style={{ backgroundColor: c.tableHeaderBg }}>
              <tr>
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`${s.cellPadding} ${s.cellText} text-center border`}
                    style={{
                      color: c.tableHeaderText,
                      borderColor: c.tableBorder,
                    }}
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
                      className={`${s.cellPadding} ${s.cellText} text-center border`}
                      style={{
                        color: c.tableText,
                        borderColor: c.tableBorder,
                      }}
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

export default TermSection;
