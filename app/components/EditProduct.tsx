"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input, Button, Card, Textarea } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { Spinner } from "@nextui-org/react";
import { requestAddProduct } from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

type EditProductProps = {
  id: string;
};

function EditProduct({ id }: EditProductProps) {
  const [preview, setPreview] = useState<string[]>([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);

  // filter product : todo can be use seperate api to get single product//
  const product = products?.products?.find((p: any) => p._id === id);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      sku: product?.sku || "",
      name: product?.name || "",
      quantity: product?.quantity?.toString() || "1",
      description: product?.description || "",
      //images: product?.images || "",
    },
  });

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("sku", data.sku);
    formData.append("name", data.name);
    formData.append("quantity", data.quantity);
    formData.append("description", data.description);

    //main image
    formData.append("mainImage", data.images[mainImageIndex]);

    //other images
    for (let i = 0; i < data.images.length; i++) {
      if (i !== mainImageIndex) {
        formData.append("otherImages", data.images[i]);
      }
    }

    dispatch(requestAddProduct(formData as any));
  };

  const handleImageChange = (e: any) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file: any) => URL.createObjectURL(file));
    setPreview(urls);
  };

  return (
    <div>
      <div className="flex items-center top-gap gap-x-6">
        <h1 className=" uppercase text-4xl font-bold tracking-widest ">
          Products{" "}
        </h1>
        <p className=" text-2xl text-[#001EB9] font-semibold"> Edit Product</p>
      </div>

      {/* form */}
      <div className=" top-gap">
        <form className="space-y-6">
          <Controller
            name="sku"
            control={control}
            rules={{ required: "SKU is required" }}
            render={({ field }) => (
              <Input
                {...field}
                label="SKU"
                name="sku"
                variant="flat"
                className=" max-w-[50%]"
                isRequired
                isInvalid={errors.sku ? true : false}
                errorMessage={errors.sku?.message}
              />
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Name"
                  name="name"
                  isRequired
                  variant="flat"
                  isInvalid={errors.name ? true : false}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              name="quantity"
              control={control}
              rules={{ required: "Quantity is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="QTY"
                  type="number"
                  variant="flat"
                  min={1}
                  isRequired
                  name="qty"
                  isInvalid={errors.name ? true : false}
                  errorMessage={errors.name?.message}
                />
              )}
            />
          </div>

          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <Textarea
                {...field}
                label="Product Description"
                placeholder="A small description about the product"
                variant="flat"
                name="description"
                isInvalid={errors.description ? true : false}
                errorMessage={errors.description?.message}
              />
            )}
          />

          <div>
            <p className="mb-2">Product Images</p>
            {/* <Controller
              name="images"
              control={control}
              render={({ field }) => (
                <Input
                  type="file"
                  multiple
                  accept="image/jpeg,image/png"
                  onChange={(e) => {
                    field.onChange(e.target.files);
                    handleImageChange(e);
                  }}
                  className=" max-w-[200px]"
                />
              )}
            /> */}

            <div className="grid grid-cols-4 gap-4 my-6">
              {product && (
                <>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_API}/uploads/${product.mainImage}`}
                    className="w-full h-32 object-cover rounded"
                  />
                  {product.otherImages.map((img: string, index: number) => (
                    <img
                      key={index}
                      src={`${process.env.NEXT_PUBLIC_BACKEND_API}/uploads/${img}`}
                      className="w-full h-32 object-cover rounded"
                    />
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              //type="submit"
              color="primary"
              size="lg"
              onClick={handleSubmit(onSubmit)}
              isLoading={products.addLoading}
            >
              Edit product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
