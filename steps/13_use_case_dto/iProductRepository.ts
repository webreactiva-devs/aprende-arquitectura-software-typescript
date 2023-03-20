import { Product } from "./product";

export interface IProductRepository {
  getProductById(productId: string): Product | undefined;
  // otros métodos relacionados con la entidad Product
}
