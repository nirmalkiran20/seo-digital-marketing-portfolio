"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { searchContent } from "@/lib/searchData";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    { title: string; path: string; category?: string; snippet?: string }[]
  >([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      searchContent(query).then(setResults);
      setShowDropdown(true);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  }, [query]);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;
    if (results.length > 0) {
      router.push(results[0].path); // go to first result
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto z-[50]" ref={dropdownRef}>
      {/* Search input */}
      <form
        onSubmit={handleSearch}
        className="flex items-center rounded-full border border-neutral-200 bg-white/30 py-1.5 pr-1.5 pl-3 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600"
      >
        <input
          type="text"
          placeholder="Search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
        />
        <button
          type="submit"
          aria-label="Submit search"
          className="flex items-center justify-center rounded-full bg-[#0171E3] p-1.5 text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </form>

{/* Dropdown results */}
{showDropdown && results.length > 0 && (
  <div
    className="absolute left-0 right-0 mt-16 z-30 max-h-64 overflow-y-auto rounded-b-xl border border-t-0 border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800 search-dropdown"
  >
    {results.map((item, idx) => (
      <div
        key={idx}
        onClick={() => router.push(item.path)}
        className="flex flex-col px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700"
      >
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
          {item.title}
        </span>
        {item.snippet && (
          <span className="w-full text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
            {item.snippet}
          </span>
        )}
      </div>
    ))}
  </div>
)}

</div>
  );
}
