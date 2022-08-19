import "./checkout.styles.scss";
import { CartContext } from "../contexts/cart.context";
import { useContext, useEffect } from "react";
import Button from "../components/button/button.component";

const Checkout = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const decreaseItemCount = () => {};
  const increaseItemCount = () => {};
  console.log("inside check out CART ITEMS", cartItems);
  return (
    <div className="checkout-container">
      {cartItems.map((item) => {
        return (
          <div className="item-container">
            <h2>{item.name}</h2>
            <div className="quantity-container">
              <Button buttonType="checkout" onClick={decreaseItemCount}>
                -
              </Button>
              <h2>{item.quantity}</h2>
              <Button buttonType="checkout" onClick={increaseItemCount}>
                +
              </Button>
            </div>
            <h2>${item.price}.00</h2>
            <Button buttonType="checkout">X</Button>
          </div>
        );
      })}
    </div>
  );
};
export default Checkout;
