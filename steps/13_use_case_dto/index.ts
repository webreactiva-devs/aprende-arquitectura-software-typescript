import { AddProductToCartUseCase } from "./addProductToCartUseCase";
import { Cart } from "./cart";
import { InMemoryProductRepository } from "./infraestructure/productInMemoryRepository";

const myCart = Cart.create([]);

const myProductRepository = new InMemoryProductRepository();
const addProductToCartUseCase = new AddProductToCartUseCase(
  myCart,
  myProductRepository
);

addProductToCartUseCase.execute({
  productId: "sku1",
  quantity: 1,
});
const cartResult = addProductToCartUseCase.execute({
  productId: "sku3",
  quantity: 2,
});

console.info("Total amount: ", cartResult.amount);
