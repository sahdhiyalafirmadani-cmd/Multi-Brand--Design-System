"use client";

import React, { useEffect, useState } from "react";
import Button from "../primitives/Button/Button";
import { useBrand } from "@/theme/use-brand";

interface NoticeBoardRow {
  TERM: string;
  DATE: string;
  "NO.OF DAYS": string;
}

const NoticeBoardSection = () => {
  const [rows, setRows] = useState<NoticeBoardRow[]>([]);
  const { colors, spacing } = useBrand();
  const noticeColors = colors.noticeBoardSection;
  const noticeSpacing = spacing.sections.noticeBoard;

  useEffect(() => {
    fetch("/api/sheetData?sheet=NoticeBoard")
      .then((res) => res.json())
      .then((data) => setRows(data))
      .catch((err) => console.error("Sheet fetch error:", err));
  }, []);

  return (
    <section
      className={`${noticeSpacing.sectionPaddingMobile} ${noticeSpacing.sectionPaddingDesktop}`}
      style={{ backgroundColor: noticeColors.bg }}
    >
      {/* Heading */}
      <h2
        className={`${noticeSpacing.headingSizeMobile} ${noticeSpacing.headingSizeDesktop} ${noticeSpacing.headingWeight} ${noticeSpacing.headingMarginBottom} ${noticeSpacing.headingTextAlign}`}
        style={{ color: noticeColors.heading }}
      >
        NOTICE BOARD
      </h2>

      {/* Table */}
      <div className="flex justify-center mb-6">
        <table
          className={`${noticeSpacing.tableWidthMobile} ${noticeSpacing.tableWidthDesktop} table-fixed border-collapse text-center`}
          style={{ borderColor: noticeColors.tableBorder }}
        >
          <colgroup>
            <col className={noticeSpacing.tableCol1} />
            <col className={noticeSpacing.tableCol2} />
            <col className={noticeSpacing.tableCol3} />
          </colgroup>

          <thead
            style={{
              backgroundColor: noticeColors.tableHeaderBg,
              color: noticeColors.tableHeaderText,
            }}
          >
            <tr>
              <th className="px-2 py-2 border" style={{ borderColor: noticeColors.tableBorder }}>TERM</th>
              <th className="px-2 py-2 border" style={{ borderColor: noticeColors.tableBorder }}>DATE</th>
              <th className="px-2 py-2 border" style={{ borderColor: noticeColors.tableBorder }}>NO. OF DAYS</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor:
                    idx % 2 === 0
                      ? noticeColors.tableRowBg
                      : noticeColors.tableRowAltBg,
                }}
              >
                <td className="px-2 py-2 border whitespace-normal break-words" style={{ borderColor: noticeColors.tableBorder }}>
                  {row.TERM}
                </td>
                <td
                  className="px-2 py-2 border whitespace-normal break-words"
                  style={{ borderColor: noticeColors.tableBorder }}
                  dangerouslySetInnerHTML={{ __html: row.DATE }}
                />
                <td className="px-2 py-2 border whitespace-normal break-words" style={{ borderColor: noticeColors.tableBorder }}>
                  {row["NO.OF DAYS"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <Button
          text="VIEW ALL"
          onClick={() => (window.location.href = "/calendar")}
          colors={noticeColors}
          className={`${noticeSpacing.buttonWidthMobile} ${noticeSpacing.buttonWidthDesktop}`}
        />
      </div>
    </section>
  );
};

export default NoticeBoardSection;
