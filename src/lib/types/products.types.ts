import { ICategory } from "./category.types";

export interface IProduct {
  _id?: string;
  category: string | ICategory;
  type: string;
  features: string[];
  name: string;
  description: string;
  size: {
    width: string;
    height: string;
    depth: string;
  };
  manufacturer: string;
  characteristics: string;
  price: number;
  sale: string;
  images: string;
  colors: string[];
  createdAt?: string;
  updatedAt?: string;
}