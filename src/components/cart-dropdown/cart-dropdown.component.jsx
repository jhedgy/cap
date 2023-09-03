import { useContext } from 'react'
import "./cart-dropdown.styles.scss";
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const handleNavigateToCheckout = () => {
      navigate("/checkout");
    }
    return (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <Button onClick={handleNavigateToCheckout}>GO TO CHECKOUT</Button>
      </div>
    );
}

export default CartDropdown;