"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";

export default function Pagination({ children, totalPages }) {
  const [_, setParams] = useState(new URLSearchParams("?page=1"));
  const [page, setPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams("?page=1");
    params.set("page", page);
    setParams(params);
    console.log(params);
  }, [page]);

  return (
    <>
      <div>{children}</div>
      <div className="flex justify-center mt-4 space-x-4">
        <Link href={{ query: { page: page } }}>
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`px-4 py-2 rounded-md shadow-sm ${
              page === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous {page}
          </button>
        </Link>
        <Link href={{ query: { page: page } }}>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded-md shadow-sm ${
              page === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next {page}
          </button>
        </Link>
      </div>
    </>
  );
}
