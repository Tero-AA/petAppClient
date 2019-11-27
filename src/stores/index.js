import { AuthStore } from './Auth';
import { ProductsStore } from "./Products";
import { ShoppingCartStore } from "./ShoppingCart";
import { ProductModel } from "../models/ProductModel";

const authStore = AuthStore.create();

const shoppingCartStore = ShoppingCartStore.create({ products: [] });

const productsStore = ProductsStore.create({
  data: [
    ProductModel.create({
      id: '1',
      name: 'Comida para perros Bakers',
      imageUrl: require('../../assets/img/products/product1.png'),
      kgPrice: 5000,
      unityPrice: 10000,
    }),
    ProductModel.create({
      id: '2',
      name: 'Comida para perros Pedigree',
      imageUrl: require('../../assets/img/products/product2.png'),
      kgPrice: 5000,
      unityPrice: 15000,
    }),
  ]
})

export const store = {
  authStore,
  shoppingCartStore,
  productsStore
};

window.MobxStore = store;