import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import starSvg from "@/public/star.svg";
import Image from "next/image";

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
    <div className="flex flex-col md:flex-row justify-between items-center">
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
          className=" px-6 py-2 text-white bg-[#001EB9] rounded-full hover:bg-blue-800 flex items-center gap-2"
        >
          <Link href="/favourite">
            <Image src={starSvg} alt="search" width={6} height={6} />
          </Link>
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
              <Image src={starSvg} alt="search" width={22} height={22} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
