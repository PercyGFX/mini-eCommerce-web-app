"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import Navigation from "./Navigation";
import Image from "next/image";
import Tables from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { requestProducts } from "../store/slices/products.slice";
import { Spinner } from "@nextui-org/react";
import { requestFavorites } from "../store/slices/favourites.slice";

function Favourite() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.favourites);

  // get products from saga
  React.useEffect(() => {
    dispatch(requestFavorites());
  }, [dispatch]);

  console.log(products.favouriteProducts);

  return (
    <div>
      <h1 className=" uppercase text-4xl font-bold tracking-widest top-gap">
        FAVOURITE PRODUCTS
      </h1>
      <Navigation />

      {products.loading ? (
        <div className="flex justify-center my-8">
          <Spinner />
        </div>
      ) : products.error ? (
        <div className="text-red-500 text-center my-8">{products.error}</div>
      ) : (
        <Tables products={products.favouriteProducts} />
      )}
    </div>
  );
}

export default Favourite;
