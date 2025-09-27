import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style.jsx';
import { useContext } from 'react';
import cartIconSVG from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
   
const CartIcon = () => {
    const { isDropdownOpen, setIsDropdownOpen, cartCount } = useContext(CartContext);

    const controlDropdown = () => {setIsDropdownOpen(!isDropdownOpen)}

    return (
        <CartIconContainer onClick={controlDropdown}>
            <ShoppingIcon src={cartIconSVG} alt="cart-icon" />
            <ItemCount>{cartCount ? cartCount: 0}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;