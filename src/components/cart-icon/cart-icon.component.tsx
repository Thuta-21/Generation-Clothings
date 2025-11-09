import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style.jsx';
import cartIconSVG from '../../assets/shopping-bag.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.actions.js';

const CartIcon = () => {
    const dispatch = useDispatch();
    const isDropdownOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const controlDropdown = () => {dispatch(setIsCartOpen(!isDropdownOpen))}

    return (
        <CartIconContainer onClick={controlDropdown}>
            <ShoppingIcon src={cartIconSVG} alt="cart-icon" />
            <ItemCount>{cartCount ? cartCount: 0}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;