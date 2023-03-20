import { Cart } from "./cart";
import { Product } from "./product";

export class AddProductToCartUseCase {
  constructor(private readonly cart: Cart) {}

  // Solo para acceder a los productos dentro del carrito desde el Use Case
  getTotalAmount(): any {
    return this.cart.totalAmount;
  }

  execute(product: Product, quantity: number): void {
    this.cart.add({ product, quantity });
  }
}
