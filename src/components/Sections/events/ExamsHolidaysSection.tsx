"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const ExamsHolidaysSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.eventsExams;
  const c = colors.eventsExams;

  const [mainHeading, setMainHeading] = useState("");
  const [tables, setTables] = useState<{ subHeading: string; headers: string[]; rows: string[][] }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=eventsPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      // Main Heading
      const heading = data.find((i: any) => i.componentName === "Events_Exams_MainHeading")?.value || "";
      setMainHeading(heading);

      // Build tables
      const tempTables: any[] = [];
      let currentTable: any = { subHeading: "", headers: [], rows: [] };

      data.forEach((item: any) => {
        if (item.componentName === "Events_Exams_SubHeading") {
          if (currentTable.subHeading) tempTables.push(currentTable);
          currentTable = { subHeading: item.value, headers: [], rows: [] };
        } else if (item.componentName === "Events_Exams_TableHeader") {
          currentTable.headers.push(item.value);
        } else if (item.componentName === "Events_Exams_Row") {
          currentTable.rows.push(item.value.split("|").map((v: string) => v.trim()));
        }
      });
      if (currentTable.subHeading) tempTables.push(currentTable);

      setTables(tempTables);
    };

    fetchData();
  }, []);

  const renderTable = (headers: string[], rows: string[][]) => (
    <div className={s.tableWrapper}>
      <div className={s.tableContainer}>
        <table className={s.table} style={{ borderColor: c.tableBorder }}>
          <thead style={{ backgroundColor: c.tableHeaderBg }}>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className={`${s.cellPadding} ${s.cellText} text-center border`}
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
                    className={`${s.cellPadding} ${s.cellText} text-center border`}
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
  );

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      {/* MAIN HEADING */}
      <div className={s.headingWrapper}>
        <h1 className={s.headingSize} style={{ color: c.heading }}>
          {mainHeading}
        </h1>
      </div>

      {/* TABLES */}
      {tables.map((table, idx) => (
        <div key={idx}>
          <h3 className={s.headingSize} style={{ color: c.heading, textAlign: "center", marginBottom: "10px" }}>
            {table.subHeading}
          </h3>
          {renderTable(table.headers, table.rows)}
        </div>
      ))}
    </section>
  );
};

export default ExamsHolidaysSection;
