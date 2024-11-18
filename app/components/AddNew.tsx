"use client";
import React from "react";
import Image from "next/image";
import { Input, Button, Card, Textarea } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";

function AddNewProduct() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      sku: "",
      name: "",
      quantity: "1",
      description: "",
      images: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
            <Controller
              name="images"
              control={control}
              render={({ field }) => (
                <Input
                  type="file"
                  multiple
                  accept="image/jpeg,image/png"
                  description="JPEG, PNG (Maximum file size 2MB)"
                  {...field}
                  className=" max-w-[200px]"
                />
              )}
            />
          </div>
          <div className="flex justify-end">
            <Button
              //type="submit"
              color="primary"
              size="lg"
              onClick={handleSubmit(onSubmit)}
            >
              Add product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewProduct;
