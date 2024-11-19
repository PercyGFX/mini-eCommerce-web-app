"use client";
import Image from "next/image";
import { useEffect } from "react";
import Header from "../../components/Header";
import SingleProduct from "@/app/components/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { requestSingleProduct } from "@/app/store/slices/products.slice";
import { useParams } from "next/navigation";

export default function EditPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);

  // get products from saga
  useEffect(() => {
    dispatch(requestSingleProduct(params.id as any));
  }, []);

  console.log(products, "products");

  return (
    <div className="min-h-screen font-[family-name:var(--font-satoshi)] max-w-[1440px] mx-auto border py-4 px-16">
      <Header />
      {products && products.singleProduct && (
        <SingleProduct product={products.singleProduct} />
        
      )}
    </div>
  );
}
