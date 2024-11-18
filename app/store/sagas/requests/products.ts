import instance from "@/app/utils/axios";

// get products
export function getProducts() {
  return instance.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/product/all`);
}
