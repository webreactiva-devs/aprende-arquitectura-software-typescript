class Money {
  readonly amount: number;
  readonly currency: string;

  private constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public static create(amount: number, currency: string): Money {
    if (amount < 0) {
      throw new Error("Amount must be greater than 0");
    }
    if (currency.length < 3) {
      throw new Error("Currency must be at least 3 characters");
    }

    return new Money(amount, currency);
  }

}
console.log(Money.create(4, "EUR"));
