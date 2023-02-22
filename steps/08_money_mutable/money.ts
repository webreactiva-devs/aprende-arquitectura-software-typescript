export class Money {
  #amount!: number;
  #currency!: string;

  private constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public static create(amount: number, currency: string): Money {
    return new Money(amount, currency);
  }

  get amount(): number {
    return this.#amount;
  }
  set amount(value: number) {
    if (value < 0) {
      throw new Error("Amount must be greater than 0");
    }
    this.#amount = value;
  }
  get currency(): string {
    return this.#currency;
  }
  set currency(value: string) {
    if (value.length < 3) {
      throw new Error("Currency must be at least 3 characters");
    }
    this.#currency = value;
  }

}

console.log(Money.create(4, "EUR"));
