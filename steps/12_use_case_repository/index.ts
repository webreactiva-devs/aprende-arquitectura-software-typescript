import { AddProductToCartUseCase } from "./addProductToCartUseCase";
import { Cart } from "./cart";
import { InMemoryProductRepository } from "./infraestructure/productInMemoryRepository";

const myCart = Cart.create([]);

const myProductRepository = new InMemoryProductRepository()
const addProductToCartUseCase = new AddProductToCartUseCase(
  myCart,
  myProductRepository
);

addProductToCartUseCase.execute(
  "sku1",
  1
);
addProductToCartUseCase.execute(
  "sku3",
  2
);

console.info('Total amount: ' , addProductToCartUseCase.getTotalAmount());