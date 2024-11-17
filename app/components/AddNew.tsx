import React from "react";
import Image from "next/image";

function AddNewProduct() {
  return (
    <div>
      <div className="flex items-center top-gap gap-x-6">
        <h1 className=" uppercase text-4xl font-bold tracking-widest ">
          Products{" "}
        </h1>
        <p className=" text-2xl text-[#001EB9] font-semibold">
          {" "}
          Add new product
        </p>
      </div>
    </div>
  );
}

export default AddNewProduct;
