"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

type CalendarData = {
  mainHeading: string;
  subHeadings: string[];
  tableHeaders: string[];
  rows: { [month: string]: string[][] }; // rows grouped by month
};

const CalendarSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.calendarSection;
  const c = colors.calendarSection;

  const [calendarData, setCalendarData] = useState<CalendarData>({
    mainHeading: "",
    subHeadings: [],
    tableHeaders: [],
    rows: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=calendarPage"); // make sure your sheet name matches
      const data = await res.json();
      if (!Array.isArray(data)) return;

      const mainHeading =
        data.find((i: any) => i.componentName === "Calendar_MainHeading")?.value || "";

      const tableHeaders = data
        .filter((i: any) => i.componentName === "Calendar_TableHeader")
        .map((i: any) => i.value);

      // group rows by month (subHeading)
      const rows: { [month: string]: string[][] } = {};
      let currentMonth = "";
      data.forEach((i: any) => {
        if (i.componentName === "Calendar_SubHeading") {
          currentMonth = i.value;
          if (!rows[currentMonth]) rows[currentMonth] = [];
        }
        if (i.componentName === "Calendar_Row") {
          if (currentMonth) {
            const row = i.value.split("|").map((v: string) => v.trim());
            rows[currentMonth].push(row);
          }
        }
      });

      const subHeadings = Object.keys(rows);

      setCalendarData({ mainHeading, subHeadings, tableHeaders, rows });
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className="container mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <div className={s.headingWrapper}>
          <h1 className={s.headingSize} style={{ color: c.heading }}>
            {calendarData.mainHeading}
          </h1>
        </div>

        {/* Loop through months */}
        {calendarData.subHeadings.map((month, i) => (
          <div key={i} className="w-full mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">{month}</h2>
            <div className={s.tableWrapper}>
              <div className={s.tableContainer}>
                <table className={s.tableWidth} style={{ borderColor: c.tableBorder }}>
                  <thead style={{ backgroundColor: c.tableHeaderBg }}>
                    <tr>
                      {calendarData.tableHeaders.map((head, i) => (
                        <th
                          key={i}
                          className={`${s.cellPadding} ${s.cellText} border`}
                          style={{ color: c.tableHeaderText, borderColor: c.tableBorder }}
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {calendarData.rows[month].map((row, rIndex) => (
                      <tr key={rIndex} style={{ backgroundColor: "white" }}>
                        {row.map((cell, cIndex) => (
                          <td
                            key={cIndex}
                            className={`${s.cellPadding} ${s.cellText} border`}
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
        ))}
      </div>
    </section>
  );
};

export default CalendarSection;
