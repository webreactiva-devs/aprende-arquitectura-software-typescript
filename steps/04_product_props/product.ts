// Añadimos export porque lo usaremos en siguientes pasos
export interface ProductProps {
  id: string;
  title: string;
  price: number;
}

export class Product {
  #id!: string;
  #title!: string;
  #price!: number;
  constructor(id: string, title: string, price: number) {
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
  get price(): number {
    return this.#price;
  }
  set price(value: number) {
    if (value <= 0) {
      throw new Error("Price must be greater than 0");
    }
    this.#price = value;
  }
}

const myProduct = Product.create({
  id: "123",
  title: "My Product",
  price: 10,
});
console.log(myProduct.id);
