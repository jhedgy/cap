import { useContext } from "react";
import { CheckoutContainer } from "./checkout.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const {
    cartItems,
    cartTotal,
  } = useContext(CartContext);

//   const handleRemoveItem = (cartItem) => removeItemFromCart(cartItem);
//   const handleAddItem = (cartItem) => addItemToCart(cartItem);
//   const handleClearItem = (cartItem) => clearItemFromCart(cartItem);

  return (
    <CheckoutContainer>
      <div className="checkout-header">
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
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="checkout-header">
        <div className="total">TOTAL: ${cartTotal}</div>
      </div>
    </CheckoutContainer>
  );
};

export default Checkout;
