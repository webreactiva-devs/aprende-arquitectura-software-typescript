class Product {
  #id!: string;
  #title!: string;
  #price!: number;
  private constructor(id: string, title: string, price: number) {
    this.id = id;
    this.title = title;
    this.price = price;
  }

  public static create(id: string, title: string, price: number): Product {
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

const myProduct = Product.create("123", "My Product", 10);
console.log(myProduct.id);
