import { createContext, useEffect, useState } from "react";
const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains the productToAdd
  console.log("cartItems", cartItems);
  let curId = productToAdd.id;
  console.log("product To add ", productToAdd);
  //   console.log(curId);
  let x = cartItems.find((item) => item.id === curId);
  // if found, increment
  if (x) {
    // console.log(x, "existing id");
    // console.log(curId, "curId");

    return cartItems.map((item) =>
      item.id === curId ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  // return new arr with modified cartItems / new cart item
  console.log("new item added");
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

//

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  // everytime the cartItems array changes aka we add something to the cart
  //re-cacl the cartCount
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    setCartCount,
    setCartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
