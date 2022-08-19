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

const removeCartItem = (cartItems, productToRemove) => {
  //find the cart item to remove
  let curId = productToRemove.id;
  let x = cartItems.find((item) => item.id === curId);
  // check if quantity ===1 then remove it from the cart
  if (x.quantity === 1) {
    //return an updated array with only items that dont match
    //the item we were trying to decrement -aka- remove it
    //from the list
    return cartItems.filter((item) => item.id !== curId);
  }
  // else return back items updated
  return cartItems.map((item) =>
    item.id === curId ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const deleteItem = (cartItems, itemToDelete) => {
  return cartItems.filter((item) => item.id !== itemToDelete.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

//

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  // everytime the cartItems array changes aka we add something to the cart
  //re-cacl the cartCount
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const deleteItemFromCart = (itemToDelete) => {
    setCartItems(deleteItem(cartItems, itemToDelete));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    cartItems,
    setCartCount,
    setCartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
