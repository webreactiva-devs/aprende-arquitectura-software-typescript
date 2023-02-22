import { Product } from "./product";

class Cart {
  #products!: Product[];
  private constructor(products: Product[]) {
    this.products = products;
  }

  public static create(products: Product[]): Cart {
    return new Cart(products);
  }

  get products(): Product[] {
    return this.#products;
  }

  set products(value: Product[]) {
    this.#products = value;
  }

  public addProduct(product: Product): void {
    this.#products.push(product);
  }
}

const myCart = Cart.create([]);
console.log(myCart.products);
myCart.addProduct(
  Product.create({
    id: "456",
    title: "My Product",
    price: 10,
  })
);
console.log(myCart.products[0].id);
