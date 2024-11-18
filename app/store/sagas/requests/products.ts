import instance from "@/app/utils/axios";

// get products
export function getProducts() {
  return instance.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/product/all`);
}

// add product
export function addProduct(data: FormData) {
  return instance.post(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/product/add-new`,
    data,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
}
