import './cart-dropdown.style.scss';
import Button from '../Botton/button.compoent'
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => { return <CartItem cartItem={item} key={item.id}/> })}
            </div>
            <Button buttonType='inverted'>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown;