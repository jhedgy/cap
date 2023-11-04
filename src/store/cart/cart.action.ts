import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems: CartItem[], productToAdd: CartItem): CartItem[] => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
  const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem && existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
    }
  
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export const setIsCartOpen = withMatcher((boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));

export const addItemToCart = withMatcher((cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
});

export const removeItemFromCart = withMatcher((cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
});

export const clearItemFromCart = withMatcher((cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
});
