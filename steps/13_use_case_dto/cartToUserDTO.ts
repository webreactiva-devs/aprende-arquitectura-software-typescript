import { Product } from "./product";

export interface CartToUserDTO {
  products: Product[];
  amount: number;
}