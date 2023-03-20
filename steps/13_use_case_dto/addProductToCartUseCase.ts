import { AddProductToCartDTO } from "./addProductToCartDTO";
import { Cart } from "./cart";
import { CartToUserDTO } from "./cartToUserDTO";
import { IProductRepository } from "./iProductRepository";

export class AddProductToCartUseCase {
  constructor(
    private readonly cart: Cart,
    private readonly productRepository: IProductRepository
  ) {}

  execute(request: AddProductToCartDTO): CartToUserDTO {
    const { productId, quantity} = request;
    const product = this.productRepository.getProductById(productId);
    if (product) {
      this.cart.add({ product, quantity });
    }
    return {
      products: this.cart.cartProducts.map(cartProduct => cartProduct.product),
      amount: this.cart.totalAmount,
    };
  }
}
