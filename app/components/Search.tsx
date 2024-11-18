import React from "react";
import { Input } from "@nextui-org/react";
import Navigation from "./Navigation";
import Image from "next/image";
import Tables from "./Table";
import { IProduct } from "../utils/types/products";

type SearchProductProps = {
  filteredProducts: IProduct[];
  query: string;
};

function AllProducts({ filteredProducts, query }: any) {
  console.log(filteredProducts, "filteredProducts");
  return (
    <div>
      <h1 className=" uppercase text-4xl font-bold tracking-widest top-gap">
        Products
      </h1>
      <Navigation />
      <div className=" my-6">
        <p className=" text-gray-500 text-2xl font-semibold">
          {filteredProducts.length} results found for '{query}'
        </p>
      </div>

      <div className="space-y-4">
        {filteredProducts.map((product: IProduct) => (
          <div
            key={product._id}
            className="border-b pb-4 hover:bg-gray-50 p-4 cursor-pointer mx-10"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-blue-600 my-2">#{product.sku}</p>
                <h2 className="text-xl font-semibold my-2">{product.name}</h2>
                <p className="text-gray-600 mt-1 my-2">{product.description}</p>
              </div>
              <div className="text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
