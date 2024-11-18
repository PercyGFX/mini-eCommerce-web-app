import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navigation() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex justify-between items-center">
      {/* search box */}
      <form
        onSubmit={handleSearch}
        className="w-full px-4 py-3 rounded-full bg-[#F7F7F7]/90 focus:outline-none focus:ring-2 focus:ring-[#001EB9] placeholder-gray-500 flex gap-x-4 max-w-[600px] my-6"
      >
        <input
          type="text"
          placeholder="Search for products"
          className="bg-[#F7F7F7]/90 mx-2 w-full focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className=" px-6 py-2 text-white bg-[#001EB9] rounded-full hover:bg-blue-400 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search
        </button>
      </form>

      {/* new product */}
      <div>
        <div className="flex items-center gap-3">
          <Link href="/add-new">
            <button className="px-16 py-3 bg-[#001EB9] text-white rounded-lg hover:bg-blue-700 transition-colors">
              New Product
            </button>
          </Link>

          <Link href="/favourite">
            <button className="py-3 px-5 border border-[#001EB9] rounded-lg hover:bg-blue-50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#001EB9]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
