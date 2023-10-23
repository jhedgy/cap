import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutStart } from "../../store/user/user.action";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { 
  NavigationContainer, 
  NavigationLinksContainer, 
  LogoContainer,
  NavigationLink,
} from "./navigation.styles.jsx";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavigationLinksContainer>
          <NavigationLink to="/shop">
            SHOP
          </NavigationLink>
          {currentUser ? (
            <NavigationLink as="span" onClick={signOutUser}>
              SIGN-OUT
            </NavigationLink>
          ) : (
            <NavigationLink to="/auth">
              SIGN IN
            </NavigationLink>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </NavigationLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;