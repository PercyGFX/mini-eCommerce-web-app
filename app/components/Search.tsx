import React from "react";
import { Input } from "@nextui-org/react";
import Navigation from "./Navigation";
import Image from "next/image";
import Tables from "./Table";

function AllProducts() {
  return (
    <div>
      <h1 className=" uppercase text-4xl font-bold tracking-widest top-gap">
        Products
      </h1>
      <Navigation />
      <div className=" my-6">
        <p className=" text-gray-500 text-2xl font-semibold">
          4 result found for 'Books'
        </p>
      </div>
    </div>
  );
}

export default AllProducts;
