"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@nextui-org/react";
import { IProduct } from "../utils/types/products";


type SingleProductProps = {
  product: IProduct;
};

function SingleProduct({ product }: SingleProductProps) {
  return (
    <div className="space-y-8  top-gap mb-10">
      <h1 className="uppercase text-4xl font-bold tracking-widest">
        Product Details
      </h1>

      {/* images */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Images</h2>
        <div>
          <p className="text-gray-600 mb-2">Main Image:</p>
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_API}/uploads/${product.mainImage}`}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {product.otherImages.length > 0 && (
          <div>
            <p className="text-gray-600 mb-2">Other Images:</p>
            <div className="grid grid-cols-4 gap-4">
              {product.otherImages.map((img, index) => (
                <img
                  key={index}
                  src={`${process.env.NEXT_PUBLIC_BACKEND_API}/uploads/${img}`}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* details */}
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="space-y-6">
          <div>
            <p className="text-gray-600">SKU</p>
            <p className="text-xl font-semibold">{product.sku}</p>
          </div>

          <div>
            <p className="text-gray-600">Name</p>
            <p className="text-xl font-semibold">{product.name}</p>
          </div>

          <div>
            <p className="text-gray-600">Quantity</p>
            <p className="text-xl font-semibold">{product.quantity}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-gray-600">Description</p>
            <p className="text-lg">{product.description}</p>
          </div>

          <div>
            <p className="text-gray-600">Created At</p>
            <p className="text-lg">
              {new Date(product.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-gray-600">Last Updated</p>
            <p className="text-lg">
              {new Date(product.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
