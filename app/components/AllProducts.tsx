import React from "react";
import { Input } from "@nextui-org/react";
import Navigation from "./Navigation";

function AllProducts() {
  return (
    <div>
      <h1 className=" uppercase text-2xl font-bold tracking-widest top-gap">
        Products
      </h1>
      <Navigation />
    </div>
  );
}

export default AllProducts;
