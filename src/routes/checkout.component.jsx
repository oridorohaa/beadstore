import "./checkout.styles.scss";
import { CartContext } from "../contexts/cart.context";
import { useContext, useEffect } from "react";
import Button from "../components/button/button.component";
import CheckoutItem from "../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  let total = 0;

  console.log("inside check out CART ITEMS", cartItems);
  return (
    <div className="checkout-container">
      <div className="checkout-header ">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        // const { id, name, quantity, price } = item;
        total += cartItem.price * cartItem.quantity;
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total: ${cartTotal}.00</span>
    </div>
  );
};
export default Checkout;
