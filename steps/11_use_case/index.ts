import { AddProductToCartUseCase } from "./addProductToCartUseCase";
import { Cart } from "./cart";
import { Money } from "./money";
import { Product } from "./product";

const myCart = Cart.create([]);
const myProduct = Product.create({
    id: "123",
    title: "My Product",
    price: Money.create(10, "EUR"),
  })
const myProduct2 = Product.create({
    id: "1233",
    title: "Other Product",
    price: Money.create(12, "EUR"),
  })
const addProductToCartUseCase = new AddProductToCartUseCase(myCart);

addProductToCartUseCase.execute(
  myProduct,
  1
);
addProductToCartUseCase.execute(
  myProduct2,
  2
);

console.info('Total amount: ' , addProductToCartUseCase.getTotalAmount());