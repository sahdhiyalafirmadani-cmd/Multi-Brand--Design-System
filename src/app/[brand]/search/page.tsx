"use client";

import { useSearchParams, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const sheetsToSearch = [
  "HeaderTop",
  "aboutPage",
  "homePage",
  "footer",
  "headerUpper",
  "calendarPage",
  "contactPage",
  "galleryPage",
  "eventsPage",
  "madamPage",
  "historyAlidPage",
  "chairmanPage",
  "montessoriPage",
  "careersPage",
  "NoticeBoard",
  "achievementsPage",
];

const SearchPage = () => {
  const params = useParams();
  const brand = params?.brand || "alif";

  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      if (!query) return;

      let allResults: any[] = [];

      for (const sheet of sheetsToSearch) {
        try {
          const res = await fetch(`/api/sheetData?sheet=${sheet}`);
          const data = await res.json();

          if (Array.isArray(data)) {
            const filtered = data.filter((item: any) =>
              item.value?.toLowerCase().includes(query)
            );

            filtered.forEach((item: any) => {
              allResults.push({
                text: item.value,
                sheet,
              });
            });
          }
        } catch (e) {
          console.log("Error searching:", sheet);
        }
      }

      setResults(allResults);
      setLoading(false);
    };

    fetchAll();
  }, [query]);

  if (loading) return <div className="p-10">Searching...</div>;

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for "{query}"
      </h1>

      {results.length === 0 && <p>No results found.</p>}

      <div className="space-y-4">
        {results.map((r, i) => {
          const page = r.sheet.replace("Page", "").replace("page", "");
          return (
            <div key={i} className="border p-4 rounded">
              <p>{r.text}</p>

              <Link
                href={`/${brand}/${page}`}
                className="text-blue-600 underline text-sm"
              >
                Go to page
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
