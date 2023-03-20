import { Product } from "./product";

interface CartProduct {
  product: Product;
  quantity: number;
}

export class Cart {
  #cartProducts!: CartProduct[];
  private constructor(cartProducts: CartProduct[]) {
    this.cartProducts = cartProducts;
  }

  public static create(cartProducts: CartProduct[]): Cart {
    return new Cart(cartProducts);
  }

  get cartProducts(): CartProduct[] {
    return this.#cartProducts;
  }

  set cartProducts(value: CartProduct[]) {
    this.#cartProducts = value;
  }

  public add(cartProduct: CartProduct): void {
    const { product, quantity } = cartProduct;
    if (quantity < 0) {
      throw new Error("Quantity must be greater than 0");
    }
    const existingProduct = this.#cartProducts.find(
      (p) => p.product.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.#cartProducts.push(cartProduct);
    }
  }

  get totalAmount(): number {
    const sum = (acc: number, cartProduct: CartProduct) => {
      return acc + cartProduct.product.price.amount * cartProduct.quantity;
    };

    return this.cartProducts.reduce(sum, 0);
  }
}

