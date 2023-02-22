import { Product } from "./product";

interface CartProduct {
  product: Product;
  quantity: number;
}

class Cart {
  #products!: CartProduct[];
  private constructor(products: CartProduct[]) {
    this.products = products;
  }

  public static create(products: CartProduct[]): Cart {
    return new Cart(products);
  }

  get products(): CartProduct[] {
    return this.#products;
  }

  set products(value: CartProduct[]) {
    this.#products = value;
  }

  public add(cartProduct: CartProduct): void {
    this.#products.push(cartProduct);
  }
}

const myCart = Cart.create([]);
console.log(myCart.products);
myCart.add({
  product: Product.create({
    id: "123",
    title: "My Product",
    price: 10,
  }),
  quantity: 1,
});
console.log(myCart.products[0].product.id);
