import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const sheetName = url.searchParams.get("sheet") || "HeaderTop"; // default sheet

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: `'${sheetName}'!A:Z`, // dynamically use the sheet name and all columns
    });

    const rows = response.data.values || [];
    if (rows.length === 0) return NextResponse.json([]);

    // First row = headers
    const headers = rows[0];
    const data = rows.slice(1).map((row) =>
      Object.fromEntries(row.map((val, i) => [headers[i], val]))
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error("Sheet fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch sheet data" }, { status: 500 });
  }
}
