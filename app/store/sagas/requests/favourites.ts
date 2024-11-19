import instance from "@/app/utils/axios";

// get favorites
export function getFavorites() {
  return instance.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/favourite/get-favorites`
  );
}

// ppdate favorites
export function updateFavorites(data: { favorites: string[] }) {
  return instance.post(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/favourite/update-favorites`,
    data
  );
}
