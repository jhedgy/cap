import { CartIconContainer, ShopIcon, ItemCount } from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action.js';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  
  const handleToggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  }

  return (
    <CartIconContainer onClick={handleToggleIsCartOpen}>
      <ShopIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;