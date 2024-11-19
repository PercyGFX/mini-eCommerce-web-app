"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { requestProducts } from "@/app/store/slices/products.slice";
import { Spinner } from "@nextui-org/react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);

  const filteredProducts = products.products.filter((product: any) =>
    product.name.toLowerCase().includes(query?.toLowerCase() || "")
  );

  // get products from saga
  useEffect(() => {
    dispatch(requestProducts());
  }, []);

  //console.log(filteredProducts, "filteredProducts");

  return (
    <div className="min-h-screen font-[family-name:var(--font-satoshi)] max-w-[1440px] mx-auto border py-4 px-4 md:px-16">
      <Header />
      {products.loading ? (
        <div className="flex justify-center my-8">
          <Spinner />
        </div>
      ) : products.error ? (
        <div className="text-red-500 text-center my-8">{products.error}</div>
      ) : (
        <Search filteredProducts={filteredProducts} query={query} />
      )}
    </div>
  );
}
