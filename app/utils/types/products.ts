export interface IProduct {
  _id: string;
  sku: string;
  name: string;
  description: string;
  quantity: number;
  mainImage: string;
  otherImages: string[];
  createdAt: string;
  updatedAt: string;
}
