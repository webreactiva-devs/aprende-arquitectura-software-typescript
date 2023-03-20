import { Cart } from "./cart";
import { IProductRepository } from "./iProductRepository";

export class AddProductToCartUseCase {
  constructor(private readonly cart: Cart, private readonly productRepository: IProductRepository) {}

  // Solo para acceder a los productos dentro del carrito desde el Use Case
  getTotalAmount(): any {
    return this.cart.totalAmount;
  }

  execute(productId: string, quantity: number): void {
    const product = this.productRepository.getProductById(productId);
    if (product) {
      this.cart.add({ product, quantity });
    }
  }
}
