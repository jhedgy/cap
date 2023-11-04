import { useDispatch, useSelector } from "react-redux";
import { CheckoutItemContainer } from "./checkout-item.styles.jsx";
import { removeItemFromCart, clearItemFromCart, addItemToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
    const {
      name,
      price,
      quantity,
      imageUrl,
    } = cartItem;

    const handleRemoveItem = () => {
      dispatch(removeItemFromCart(cartItems, cartItem));
    }

    const handleAddItem = () => {
      dispatch(addItemToCart(cartItems, cartItem));
    }

    const handleClearItem = () => {
      dispatch(clearItemFromCart(cartItems, cartItem));
    }
   return (
     <CheckoutItemContainer>
       <div className="image-container">
         <img src={imageUrl} alt={`${name}`} />
       </div>
       <span className="name"> {name} </span>
       <span className="quantity">
         <div className="arrow" onClick={handleRemoveItem}>
           &#10094;
         </div>
         <span className="value">{quantity}</span>
         <div className="arrow" onClick={handleAddItem}>
           &#10095;
         </div>
       </span>
       <span className="price">{price}</span>
       <div className="remove-button" onClick={handleClearItem}>
         &#10005;
       </div>
     </CheckoutItemContainer>
   );
}
export default CheckoutItem;