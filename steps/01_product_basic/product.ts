class Product {
  private _id: string;
  private _title: string;
  private _price: number;
  constructor(id: string, title: string, price: number) {
    this._id = id;
    this._title = title;
    this._price = price;
  }

  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get price(): number {
    return this._price;
  }
  set price(value: number) {
    this._price = value;
  }
}

const myProduct = new Product("123", "My Product", 10);