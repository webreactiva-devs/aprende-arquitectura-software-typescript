import { IProductRepository } from "../iProductRepository";
import { Money } from "../money";
import { Product } from "../product";

export class InMemoryProductRepository implements IProductRepository {
  private products: Product[] = [
    Product.create({
      id: "sku1",
      title: "Product 1",
      price: Money.create(10, "EUR"),
    }),
    Product.create({
      id: "sku2",
      title: "Product 2",
      price: Money.create(12, "EUR"),
    }),
    Product.create({
      id: "sku3",
      title: "Product 3",
      price: Money.create(17, "EUR"),
    }),
  ];

  getProductById(productId: string): Product | undefined {
    return this.products.find((product) => product.id === productId);
  }
}
