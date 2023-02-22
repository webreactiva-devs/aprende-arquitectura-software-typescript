import { Money } from "./money";

export interface ProductProps {
  id: string;
  title: string;
  price: Money;
}

export class Product {
  #id!: string;
  #title!: string;
  #price!: Money;
  private constructor(id: string, title: string, price: Money) {
    this.id = id;
    this.title = title;
    this.price = price;
  }

  public static create(props: ProductProps): Product {
    const { id, title, price } = props;
    return new Product(id, title, price);
  }

  get id(): string {
    return this.#id;
  }
  set id(value: string) {
    this.#id = value;
  }
  get title(): string {
    return this.#title;
  }
  set title(value: string) {
    if (value.length < 3) {
      throw new Error("Title must be at least 3 characters");
    }
    this.#title = value;
  }
  get price(): Money {
    return this.#price;
  }
  set price(value: Money) {
    this.#price = value;
  }
}

const productWM = Product.create({
  id: "123",
  title: "My Product",
  price: Money.create(0, "EUR"),
});

console.log(productWM.price.amount);
