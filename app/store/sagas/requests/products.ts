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

// edit product

export function editProduct(data: any) {
  return instance.put(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/product/edit-product`,
    data,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}

// delete product

export function deleteProduct(id: string) {
  return instance.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/product/delete`,
    {
      data: { id },
      headers: { "Content-Type": "application/json" },
    }
  );
}

// get single product
export function getSingleProduct(productId: string) {
  return instance.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/product/get-product/${productId}`
  );
}
