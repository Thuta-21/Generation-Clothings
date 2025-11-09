import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.style.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../Botton/button.compoent";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.actions";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const cartItems = useSelector(selectCartItems);
  const checkoutBtnHandler = () => {
    dispatch(setIsCartOpen(false));
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem cartItem={item} key={item.id} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={checkoutBtnHandler}
      >
        Go to checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
