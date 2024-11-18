"use client";
import React, { useEffect } from "react";
import { Input } from "@nextui-org/react";
import Navigation from "./Navigation";
import Image from "next/image";
import Tables from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { requestProducts } from "../store/slices/products.slice";
import { Spinner } from "@nextui-org/react";

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);

  console.log(products);

  // get products from saga
  useEffect(() => {
    dispatch(requestProducts());
  }, []);

  return (
    <div>
      <h1 className=" uppercase text-4xl font-bold tracking-widest top-gap">
        Products
      </h1>
      <Navigation />
      {products.loading ? (
        <div className="flex justify-center my-8">
          <Spinner />
        </div>
      ) : products.error ? (
        <div className="text-red-500 text-center my-8">{products.error}</div>
      ) : (
        <Tables products={products.products} />
      )}
    </div>
  );
}

export default AllProducts;
