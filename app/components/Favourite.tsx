import React from "react";
import { Input } from "@nextui-org/react";
import Navigation from "./Navigation";
import Image from "next/image";
import Tables from "./Table";

function Favourite() {
  return (
    <div>
      <h1 className=" uppercase text-4xl font-bold tracking-widest top-gap">
        FAVOURITE PRODUCTS
      </h1>
      <Navigation />

      {/* <Tables /> */}
    </div>
  );
}

export default Favourite;
