"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaginationFunc({ totalPages, currentPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));
  const [pageNum, setPageNum] = useState(page);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNum);

    router.push(`?${params.toString()}`);
  }, [pageNum, router, searchParams]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (pageNum === 1) return;
              setPageNum((value) => --value);
            }}
            href={"?page=" + pageNum}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`?page=${page}`}
              onClick={() => setPageNum(page)}
              isActive={currentPage == page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              if (pageNum === totalPages) return;
              setPageNum((value) => ++value);
            }}
            href={`?page=${pageNum}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
