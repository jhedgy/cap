import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, removeItemFromCart, cartTotal, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const handleRemoveItem = (item) => removeItemFromCart(item);
  const addProductToCart = (item) => addItemToCart(item);
  const clearItem = (item) => clearItemFromCart(item);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((item) => (
        <div className="checkout-header" key={item.id}>
          <div className="header-block">
            <img src={item.imageUrl} alt={`${item.name}`} />
          </div>
          <div className="header-block">{item.name}</div>
          <div className="header-block">
            <button className="arrow" onClick={() => handleRemoveItem(item)}>
              &lsaquo;
            </button>
            {item.quantity}
            <button className="arrow" onClick={() => addProductToCart(item)}>
              &rsaquo;
            </button>
          </div>
          <div className="header-block">${item.price}</div>
          <div className="header-block">
            <span onClick={() => clearItem(item)}>X</span>
          </div>
        </div>
      ))}
      <div className="checkout-header">
        <div className="cart-total">
            TOTAL ${cartTotal}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
