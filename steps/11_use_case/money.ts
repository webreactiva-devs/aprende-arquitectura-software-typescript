export class Money {
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

  isEquals(money: Money): boolean {
    return this.amount === money.amount && this.currency === money.currency;
  }
  isGreaterThan(money: Money): boolean {
    return this.amount > money.amount;
  }
  isLessThan(money: Money): boolean {
    return this.amount < money.amount;
  }
  isSameCurrency(money: Money): boolean {
    return this.currency === money.currency;
  }
}