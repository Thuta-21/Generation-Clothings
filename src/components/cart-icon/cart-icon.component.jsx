import './cart-icon.style.scss';
import { useContext } from 'react';
import cartIconSVG from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isDropdown, setContext } = useContext(CartContext);

    const chageCart = () => {setContext(!isDropdown)}

    return (
        <div className='cart-icon-container' onClick={chageCart}>
            <img className='shopping-icon' src={cartIconSVG} alt="cart-icon" />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;