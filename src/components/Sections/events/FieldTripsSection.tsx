"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

const FieldTripsSection = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.eventsFieldTrips;
  const c = colors.eventsFieldTrips;

  const [mainHeading, setMainHeading] = useState("");
  const [tableRows, setTableRows] = useState<string[][]>([]);
  const [imageRows, setImageRows] = useState<string[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=eventsPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      setMainHeading(
        data.find((i: any) => i.componentName === "Events_FieldTrips_MainHeading")?.value || ""
      );

      setTableRows(
        data
          .filter((i: any) => i.componentName === "Events_FieldTrips_TableRow")
          .map((i: any) => i.value.split("|").map((v: string) => v.trim()))
      );

      setImageRows(
        data
          .filter((i: any) => i.componentName === "Events_FieldTrips_Images")
          .map((i: any) => i.value.split("|").map((v: string) => v.trim()))
      );
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      {/* Main Heading */}
      <div className={s.headingWrapper}>
        <h1 className={s.headingSize} style={{ color: c.heading }}>
          {mainHeading}
        </h1>
      </div>

      {/* Table + Images */}
      {tableRows.map((row, idx) => (
        <div key={idx} className="mb-6">
          <div className={s.tableWrapper}>
            <div className={s.tableContainer}>
              <table className={s.table} style={{ borderColor: c.tableBorder }}>
                <thead>
                  <tr>
                    {row.map((cell, cIdx) => (
                      <th
                        key={cIdx}
                        className={`${s.cellPadding} ${s.cellText} border`}
                        style={{ color: c.tableText, borderColor: c.tableBorder }}
                      >
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
          </div>

          {/* Images */}
          <div className={s.imagesWrapper}>
            {imageRows[idx]?.map((img, i) => (
              <img key={i} src={img} alt={`Field Trip ${idx}-${i}`} className={s.image} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FieldTripsSection;
