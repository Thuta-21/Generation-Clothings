import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.style.jsx';
import Button, {BUTTON_TYPE_CLASSES} from '../Botton/button.compoent'
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { Link, useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems, setIsDropdownOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutBtnHandler = () => {
        setIsDropdownOpen(false);
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length 
                ? cartItems.map(item => { return <CartItem cartItem={item} key={item.id}/> })
                : <EmptyMessage>Your cart is empty</EmptyMessage>}
            </CartItems>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={checkoutBtnHandler}>Go to checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;